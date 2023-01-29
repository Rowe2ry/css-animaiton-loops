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
    setTimeout(()=>loopOneByTargetClass(delayBetween,animationTime,targetClass,animationClass),cycleTime);
}