"use strict";
function loopOneByTargetClass(animationTime, delayBetween, targetClass, animationClass) {
    const el = document.querySelector(`.${targetClass}`);
    var cycleTime = animationTime;
    el?.classList.toggle(animationClass);
    setTimeout(() => loopOneByTargetClass(delayBetween, animationTime, targetClass, animationClass), cycleTime);
}
function loopOneByTargetId(animationTime, delayBetween, targetId, animationClass) {
    const el = document.querySelector(`#${targetId}`);
    var cycleTime = animationTime;
    el?.classList.toggle(animationClass);
    setTimeout(() => loopOneByTargetClass(delayBetween, animationTime, targetId, animationClass), cycleTime);
}
function loopManyByTargetClass(animationTime, delayBetween, targetClass, animationClass) {
    const elList = document.querySelectorAll(`.${targetClass}`);
    var cycleTime = animationTime;
    elList.forEach(el => el?.classList.toggle(animationClass));
    setTimeout(() => loopOneByTargetClass(delayBetween, animationTime, targetClass, animationClass), cycleTime);
}
