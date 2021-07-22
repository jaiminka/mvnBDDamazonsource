$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium_workspace/mvnBDDamazonsource/src/main/java/feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "amazon login feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Scenario: amazon login scenario"
    },
    {
      "line": 6,
      "value": "#Given user is on amazon login page"
    },
    {
      "line": 7,
      "value": "#When user enter \u003cemail\u003e and \u003cpassword\u003e."
    },
    {
      "line": 8,
      "value": "#| kachadiya | jaimin |"
    },
    {
      "line": 9,
      "value": "#Then validate user is correct account"
    },
    {
      "line": 12,
      "value": "#Scenario: amazon login scenario"
    },
    {
      "line": 14,
      "value": "#Given user is on amazon login page"
    },
    {
      "line": 15,
      "value": "#When user enter \u00275195050401\u0027 and \u0027jaimin@123\u0027."
    },
    {
      "line": 16,
      "value": "#Then validate user is correct account"
    }
  ],
  "line": 19,
  "name": "amazon login scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e.",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "validate user is correct account",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "amazon-login-feature;amazon-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "amazon-login-feature;amazon-login-scenario;;1"
    },
    {
      "cells": [
        "5195050401",
        "jaimin@123"
      ],
      "line": 27,
      "id": "amazon-login-feature;amazon-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "amazon login scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enter 5195050401 and jaimin@123.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "validate user is correct account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_amazon_login_page()"
});
formatter.result({
  "duration": 1780561800,
  "error_message": "org.openqa.selenium.WebDriverException: No browserName or device specified in session request. Please check our platforms documentation (https://saucelabs.com/docs/platforms): {\u0027sauce:options\u0027: {\u0027username\u0027: \u0027jaiminka\u0027, \u0027accessKey\u0027: \u0027XXXXXXXX-XXXX-XXXX-XXXX-XXXX5bce4ce8\u0027}} (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 687 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.2.99\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:143)\r\n\tat baseTest.BaseTest.openBrowser(BaseTest.java:67)\r\n\tat stepdefinition.LoginStepDefinition.user_is_on_amazon_login_page(LoginStepDefinition.java:25)\r\n\tat ✽.Given user is on amazon login page(D:/Selenium_workspace/mvnBDDamazonsource/src/main/java/feature/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5195050401",
      "offset": 11
    },
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "LoginStepDefinition.user_enter_and_jaimin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.validate_user_is_correct_account()"
});
formatter.result({
  "status": "skipped"
});
});