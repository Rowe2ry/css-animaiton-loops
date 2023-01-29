function loopOneByTargetClass (animationTime : number, delayBetween : number, targetClass : string, animationClass: string): void {
    const el = document.querySelector(`.${targetClass}`);
    var cycleTime : number = animationTime;
    el?.classList.toggle(animationClass);
    setTimeout(()=>loopOneByTargetClass(delayBetween,animationTime,targetClass,animationClass),cycleTime);
}

function loopOneByTargetId (animationTime : number, delayBetween : number, targetId : string, animationClass: string): void {
    const el = document.querySelector(`#${targetId}`);
    var cycleTime : number = animationTime;
    el?.classList.toggle(animationClass);
    setTimeout(()=>loopOneByTargetClass(delayBetween,animationTime,targetId,animationClass),cycleTime);
}

function loopManyByTargetClass (animationTime : number, delayBetween : number, targetClass : string, animationClass: string): void {
    const elList = document.querySelectorAll(`.${targetClass}`);
    var cycleTime : number = animationTime;
    elList.forEach(el => el?.classList.toggle(animationClass));
    setTimeout(()=>loopManyByTargetClass(delayBetween,animationTime,targetClass,animationClass),cycleTime);
}

function loopOneNTimesByTargetClass (animationTime : number, delayBetween : number, targetClass : string, animationClass: string, iterations : number): void {
    let i = iterations;
    if(i > 0) {
        const el = document.querySelector(`.${targetClass}`);
        var cycleTime : number = animationTime;
        el?.classList.toggle(animationClass);
        --i;
        setTimeout(()=>loopOneNTimesByTargetClass(delayBetween,animationTime,targetClass,animationClass, i),cycleTime);
    } 
}

function loopOneNTimesByTargetId (animationTime : number, delayBetween : number, targetId : string, animationClass: string, iterations : number): void {
    let i = iterations;
    if(i > 0) {
        const el = document.querySelector(`.${targetId}`);
        var cycleTime : number = animationTime;
        el?.classList.toggle(animationClass);
        --i;
        setTimeout(()=>loopOneNTimesByTargetId(delayBetween,animationTime,targetId,animationClass, i),cycleTime);
    }
}

function loopManyNtimesByTargetClass (animationTime : number, delayBetween : number, targetClass : string, animationClass: string, iterations : number): void {
    let i = iterations;
    if(i > 0)
    {
        const elList = document.querySelectorAll(`.${targetClass}`);
        var cycleTime : number = animationTime;
        elList.forEach(el => el?.classList.toggle(animationClass));
        --i;
        setTimeout(()=>loopManyNtimesByTargetClass(delayBetween,animationTime,targetClass,animationClass, i),cycleTime);
    }
}

module.exports = {
    loopOneByTargetClass,
    loopOneByTargetId,
    loopManyByTargetClass,
    loopOneNTimesByTargetClass,
    loopOneNTimesByTargetId,
    loopManyNtimesByTargetClass
};