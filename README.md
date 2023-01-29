# css-animaiton-loops
A utility to help front end developers creating looping animations with set delays between iterations.

## installation
Soon I hope to publish this as an npm package witht he following isntallaiton:
>npm i css-animation-loops

In the mean time, I just have a JS file that can be used as a utility helper function.
## Usage
Writing css animations that need to move, stop, and repeat is a bit of a mental exercise. Lets say you want a ball to "bounce" up in 1 second, return down in 1 second, and then not move for 4 seconds and then repeat this whole 6 second cycle over again. With the css animations tools, we might be tempted to us the delay paramter to set our stop time like so:

```
div.ball{
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 100vmax;
    animation: 2s ease-in-out 4s infinite jump;
}

@keyframes {
    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-50%);
    }
}
```
Unfortunately, the code above will cause the ball to not move for 4 seconds, and then the ball will begin bouncing up and down in a 2 second animation over and over with no delay between bounces infinitely.

The current front end work around is to build the stopped motion into the entire animation through keyframes. This requires some math. For this simple example, the math is easy. We want the ball to move halfway through its animation in 1 second, finish its animation in 1 more second, and then not move for 4 seconds. Adding these times up we get a 6 second animation cycle. Now we have to figure out our keyframes. Fortunately fo rhtis example thats quite easy.

* From animation star to half way  animated is 1 second, or 1 6th of the cycle so we get 0% and 16.667% respectively.
* Now from halfway animated to animation complete, we get 1 more second, or the next keyframe percentage at 2/6ths of the way through, or 1/3. (33.333%)
* The rest of this cycle there is no movement so we just need to ride it out to the 100% mark.

Since we build the delay into the animation itself, we can remove it from the animation declaration. Now our css looks like:

```
div.ball{
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 100vmax;
    animation: 6s ease-in-out infinite jump;
}

@keyframes {
    0%,33.333,100%% {
        transform: translateY(0);
    }

    16.667% {
        transform: translateY(-50%);
    }
}
```

Now we bring the finished product to our client and they say they want the tim between animaitons lenghtened by another half second or so. Making this change requires us to do all new, much more complicated math!

The total cycle time is now 6.5 seconds, and we want:
* 1s to halfway animated (1/6.5 = 15.384%)
* 1s to fully animated (2/6.5 = 30.77%)
* 4.s of stillness

now the client wants the bouncing animation to be 20% longer with the same longer delay between animaitions, (so moving form 2.4 seconds) and to also flash a different color over half a second after it moves before it moves again
* total cycle time (2.4 + 4.5 = 6.9s)
* 1.2s to halfway animated (1.2/6.9 = 17.391%)
* 1.2s to fully animated (2.4/6.9 = 34.783%)
* quarter a sec changing to a different color (2.65/6.9  = 38.406%)
* quarter a sec returning to normal after color change (2.9/6.9  = 42.029%)
* finally through the end of the animation to 100%

look at all that math we had to do for a simple change from the client. YUCK! css looks like:
```
div.ball{
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 100vmax;
    animation: 6s ease-in-out infinite jumpColorShift;
}

@keyframes jumpColorShift{
    0%,34.783,42.029%,100%% {
        background-color: red;
        transform: translateY(0);
    }

    17.391% {
        transform: translateY(-50%);
    }

    38.406% {
        background-color: green;
    }
}
```

This tool aims to take the frustration out of tweaking the end result animation with doing the math to account for the delay time between iterations.

You now need to define the whole moving and changing part of your animation in the css with a class solely responsible for adding the animation and leave the iteration delay up to this tooling. You will no longer need to tell the CSS to do the animation infinitely, and can instead specify, forwards, backwards etc.

Examples for our 3 scenarios:

* scenarios 1 and 2. A 2 sec ball bounce and a 4 second delay betwene bounces or a 4.5 second delay between bounces:
```
div.ball{
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 100vmax;
}

ball-animated {
    animation: 2s ease-in-out forwards jump;
}

@keyframes jump {
    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-50%);
    }
}
```
* Scenario 3. A 2.4 sec bounce, a 0.25S color change, and a 0.25s return to original color w/ a 4 second delay between animations.
```
div.ball{
    background-color: red;
    width: 2rem;
    height: 2rem;
    border-radius: 100vmax;
}

.ball-animated {
    animation: 2.9s ease-in-out forwards jumpColorShift;
}

@keyframes jumpColorShift {
    0%,82.759%,100% {
        transform: translateY(0);
    }

    41.379% {
        transform: translateY(-50%);
    }

    91.379% {
        background-color: green;
    }
}
```

You will need to give the element to be animated either an Id or class to target it with one of the 6 mehtods available here.
* loopOneByTargetClass
    * You provide 4 parameters:
        * animation time in miliseconds
        * delay between iterations time in miliseconds
        * the class with the element's base styling to target it
        * the class name that has the animation styling by itself
* loopOneByTargetId
    * You provide 4 parameters:
        * animation time in miliseconds
        * delay between iterations time in miliseconds
        * an id for an html element you wish to target
        * the class name that has the animation styling by itself
* loopManyByTargetClass
    * You provide 4 parameters:
        * animation time in miliseconds
        * delay between iterations time in miliseconds
        * the class used for multiple elements target them
        * the class name that has the animation styling by itself
* loopOneNTimesByTargetClass
    * same as the base version of this method with a 5th paramter for the number of times the animation repeats
* loopOneNTimesByTargetId
    * same as the base version of this method with a 5th paramter for the number of times the animation repeats
* loopManyNtimesByTargetClass
    * same as the base version of this method with a 5th paramter for the number of times the animation repeats

now with the above css you can define the ball bounces like so
### scenario 1: A 2 sec ball bounce with 4 sec elay between
```
<div class="ball ball-animated"></div>

<script src="LoopControl.js"></script>
<script>
    loopOneByTargetClass(2000,4000,"ball","ball-animated");
</script>
```

### scenario 2: A 2 sec ball bounce with 4.5 sec elay between
```
<div class="ball ball-animated"></div>

<script src="LoopControl.js"></script>
<script>
    loopOneByTargetClass(2000,4500,"ball","ball-animated");
</script>
```

### scenario 3: A 2.4sec ball bounce and a half second color change then 4 sec delay beore repeating
```
<div class="ball ball-animated"></div>

<script src="LoopControl.js"></script>
<script>
    loopOneByTargetClass(2900,4000,"ball","ball-animated");
</script>
```