
"use strict";

let BumperEvent = require('./BumperEvent.js');
let Sound = require('./Sound.js');
let RobotStateEvent = require('./RobotStateEvent.js');
let ScanAngle = require('./ScanAngle.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let SensorState = require('./SensorState.js');
let CliffEvent = require('./CliffEvent.js');
let ButtonEvent = require('./ButtonEvent.js');
let VersionInfo = require('./VersionInfo.js');
let DockInfraRed = require('./DockInfraRed.js');
let DigitalOutput = require('./DigitalOutput.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let ExternalPower = require('./ExternalPower.js');
let MotorPower = require('./MotorPower.js');
let KeyboardInput = require('./KeyboardInput.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let ControllerInfo = require('./ControllerInfo.js');
let Led = require('./Led.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingResult = require('./AutoDockingResult.js');

module.exports = {
  BumperEvent: BumperEvent,
  Sound: Sound,
  RobotStateEvent: RobotStateEvent,
  ScanAngle: ScanAngle,
  PowerSystemEvent: PowerSystemEvent,
  SensorState: SensorState,
  CliffEvent: CliffEvent,
  ButtonEvent: ButtonEvent,
  VersionInfo: VersionInfo,
  DockInfraRed: DockInfraRed,
  DigitalOutput: DigitalOutput,
  WheelDropEvent: WheelDropEvent,
  ExternalPower: ExternalPower,
  MotorPower: MotorPower,
  KeyboardInput: KeyboardInput,
  DigitalInputEvent: DigitalInputEvent,
  ControllerInfo: ControllerInfo,
  Led: Led,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingActionResult: AutoDockingActionResult,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingGoal: AutoDockingGoal,
  AutoDockingAction: AutoDockingAction,
  AutoDockingResult: AutoDockingResult,
};
