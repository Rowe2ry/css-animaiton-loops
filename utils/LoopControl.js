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
    setTimeout(() => loopManyByTargetClass(delayBetween, animationTime, targetClass, animationClass), cycleTime);
}
function loopOneNTimesByTargetClass(animationTime, delayBetween, targetClass, animationClass, iterations) {
    let i = iterations;
    if (i > 0) {
        const el = document.querySelector(`.${targetClass}`);
        var cycleTime = animationTime;
        el?.classList.toggle(animationClass);
        --i;
        setTimeout(() => loopOneNTimesByTargetClass(delayBetween, animationTime, targetClass, animationClass, i), cycleTime);
    }
}
function loopOneNTimesByTargetId(animationTime, delayBetween, targetId, animationClass, iterations) {
    let i = iterations;
    if (i > 0) {
        const el = document.querySelector(`.${targetId}`);
        var cycleTime = animationTime;
        el?.classList.toggle(animationClass);
        --i;
        setTimeout(() => loopOneNTimesByTargetId(delayBetween, animationTime, targetId, animationClass, i), cycleTime);
    }
}
function loopManyNtimesByTargetClass(animationTime, delayBetween, targetClass, animationClass, iterations) {
    let i = iterations;
    if (i > 0) {
        const elList = document.querySelectorAll(`.${targetClass}`);
        var cycleTime = animationTime;
        elList.forEach(el => el?.classList.toggle(animationClass));
        --i;
        setTimeout(() => loopManyNtimesByTargetClass(delayBetween, animationTime, targetClass, animationClass, i), cycleTime);
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
