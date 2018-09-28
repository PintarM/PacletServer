Title: ServiceConnection_StackExchange
Authors: b3m2a1
Categories: ServiceConnections
Creator: b3m2a1@gmail.com
Description: A service connection to the Stack Exchange API. Supports the majority of the functions defined in the API
DisplayName: StackExchange (ServiceConnection)
Extensions: <|FrontEnd -> <|Prepend -> True|>|>
Icon: FrontEnd/SystemResources/Bitmaps/stackexchange@2.png
LastModified: 2018-06-04 17:59:32
Modified: 2018-06-26 07:45:35
Name: ServiceConnection_StackExchange
Slug: serviceconnectionstackexchange
Tags: web,serviceconnection
Version: 1.1.7

<a id="stackexchange-serviceconnection" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

# StackExchange (ServiceConnection)

![ServiceConnection_StackExchange]({filename}/img/ServiceConnection_StackExchange/FrontEnd/SystemResources/Bitmaps/stackexchange%402.png)

A service connection to the Stack Exchange API. Supports the majority of the functions defined in the API

---

<a id="install" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Install

**Before installing, be sure to check out the ** **[Change Log](https://paclets.github.io/PacletServer/pages/log.html)** ** to make sure that you trust the developer.**

To install this paclet, run:

    PacletInstall[
      "ServiceConnection_StackExchange",
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

ServiceConnection_StackExchange

### Version

1.1.7

### Creator

[b3m2a1@gmail.com](mailto:b3m2a1@gmail.com)

---

<a id="extra-information" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Extra Information

This package provides no extra information

---

<a id="extensions" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Extensions

### FrontEnd

* This extension has no extra parameters