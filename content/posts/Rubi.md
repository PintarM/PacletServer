Title: Rubi
Authors: Albert D. Rich
Categories: Mathematics
Creator: Albert D. Rich
Description: Rubi is a package for symbolic, rule-based integration that outperforms Mathematica's Integrate in many cases and often finds optimal antiderivatives.
DisplayName: Rubi
Extensions: <|Kernel -> <|Root -> ., Context -> Rubi`|>, PacletServer -> <|Tags -> {integration, rule, antiderivative}, Categories -> {Mathematics}, Description -> Rubi is a package for symbolic, rule-based integration that outperforms Mathematica's Integrate in many cases and often finds optimal antiderivatives., License -> MIT|>|>
LastModified: 2018-06-26 07:43:28
License: MIT
MathematicaVersion: 11+
Modified: 2018-06-29 13:10:39
Name: Rubi
Slug: rubi
Tags: integration,rule,antiderivative
Thumbnail: logo.png
URL: https://rulebasedintegration.org
Version: 4.15.2.1

<a id="rubi" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

# Rubi

![Rubi]({filename}/img/Rubi/logo.png)

Rubi is a package for symbolic, rule-based integration that outperforms Mathematica's Integrate in many cases and often finds optimal antiderivatives.

---

<a id="install" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Install

**Before installing, be sure to check out the ** **[Change Log](https://paclets.github.io/PacletServer/pages/log.html)** ** to make sure that you trust the developer.**

To install this paclet, run:

    PacletInstall[
      "Rubi",
      "Site"->
        "http://raw.githubusercontent.com/paclets/PacletServer/master"
      ]

Depending on what the current value of  ```$ContextPath```  is you may also need to first run

    Needs["PacletManager`"]

* To update it, replace  ```PacletInstall```  with  ```PacletUpdate``` . 

* To uninstall replace  ```PacletInstall```  with  ```PacletUninstall```  and remove the  ```"Site"```  parameter.

---

<a id="basic-information" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Basic Information

### Name

Rubi

### Version

4.15.2.1

### Creator

Albert D. Rich

### URL

[https://rulebasedintegration.org](https://rulebasedintegration.org)

### License

MIT

---

<a id="extra-information" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Extra Information

### MathematicaVersion

11+

---

<a id="extensions" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Extensions

### Kernel

* Root: .

* Context: Rubi`