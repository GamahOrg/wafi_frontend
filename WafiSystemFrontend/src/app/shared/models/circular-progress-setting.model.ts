export class CircularProgressSetting {
    // basic
    percent= 0;
    maxPercent= 1000;
    toFixed= 0;
    title= "";
    showTitle= true;
    showUnits= false;
    showSubtitle= false;
    showBackground= false;
    showInnerStroke= true;
    clockwise= true;
    responsive= false;
    startFromZero= true;
    showZeroOuterStroke= true;

    // size 
    radius= 10; // hieght of shap
    backgroundPadding= 1;

    // color
    backgroundGradient= false;
    backgroundOpacity= 1;
    backgroundColor= 'transparent';
    backgroundGradientStopColor= 'transparent';
    backgroundStroke= 'transparent';
    outerStrokeGradient= true;
    outerStrokeColor= 'rgb(245, 171, 86)';
    outerStrokeGradientStopColor= 'rgb(245, 171, 86)';
    innerStrokeColor= 'rgb(252, 229, 203)';
    titleColor= 'rgb(245, 171, 86)';
    unitsColor= '#444444';
    subtitleColor= '#A9A9A9';

    // stroke
    outerStrokeWidth= 4;
    space= 16;
    innerStrokeWidth= 4;
    backgroundStrokeWidth= 0;
    outerStrokeLinecap= 'round'; // "butt" or "round" or "square" or "inherit"

    // font
    titleFontSize= '12';
    unitsFontSize= '10';
    subtitleFontSize= '12';
    titleFontWeight= "normal";
    unitsFontWeight= "normal";
    subtitleFontWeight= "normal";

    // image
    showImage= false;
    imageHeight= 0;
    imageWidth= 0;

    // animation
    animation= true;
    animateTitle= false;
    lazy= true;
    animationDuration= 1000;
}
