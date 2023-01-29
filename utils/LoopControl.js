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
function loopOneNTimesByTargetClass(iterations, animationTime, delayBetween, targetClass, animationClass) {
    let i = iterations;
    if (i > 0) {
        const el = document.querySelector(`.${targetClass}`);
        var cycleTime = animationTime;
        el?.classList.toggle(animationClass);
        --i;
        setTimeout(() => loopOneNTimesByTargetClass(i, delayBetween, animationTime, targetClass, animationClass), cycleTime);
    }
}
function loopOneNTimesByTargetId(iterations, animationTime, delayBetween, targetId, animationClass) {
    let i = iterations;
    if (i > 0) {
        const el = document.querySelector(`.${targetId}`);
        var cycleTime = animationTime;
        el?.classList.toggle(animationClass);
        --i;
        setTimeout(() => loopOneNTimesByTargetId(i, delayBetween, animationTime, targetId, animationClass), cycleTime);
    }
}
function loopManyNtimesByTargetClass(iterations, animationTime, delayBetween, targetClass, animationClass) {
    let i = iterations;
    if (i > 0) {
        const elList = document.querySelectorAll(`.${targetClass}`);
        var cycleTime = animationTime;
        elList.forEach(el => el?.classList.toggle(animationClass));
        --i;
        setTimeout(() => loopManyNtimesByTargetClass(i, delayBetween, animationTime, targetClass, animationClass), cycleTime);
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
