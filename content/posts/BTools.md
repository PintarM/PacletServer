Title: BTools
Authors: b3m2a1
Categories: Development
Creator: b3m2a1@gmail.com
Description: A general purpose package that implements useful functionality for application development. Features include: distribution tools, documentation generation, front-end manipulation, and application editing 
DisplayName: BTools
Extensions: <|Kernel -> <|Root -> ., Context -> {BTools`}|>, Resource -> <|Root -> Resources, Resources -> {Icons, PaletteGenerators, Templates, Themes, {PacletIcon, Icons/PacletIcon.png}, {PacletSiteIcon, Icons/PacletSiteIcon.png}, {AppManagerPaletteGenerator, PaletteGenerators/AppManagerPaletteGenerator.nb}, {CuratedDataHelperGenerator, PaletteGenerators/CuratedDataHelperGenerator.nb}, {DocumentationGenerator, PaletteGenerators/DocumentationGenerator.nb}, {EncodedCacheManagerGenerator, PaletteGenerators/EncodedCacheManagerGenerator.nb}, {HTMLHelperGenerator, PaletteGenerators/HTMLHelperGenerator.nb}, {PacletServerManagerGenerator, PaletteGenerators/PacletServerManagerGenerator.nb}, {PaletteTemplate, PaletteGenerators/PaletteTemplate.nb}, {PelicanHelperGenerator, PaletteGenerators/PelicanHelperGenerator.nb}, {ServiceConnectionHelperGenerator, PaletteGenerators/ServiceConnectionHelperGenerator.nb}, {SiteBuilderGenerator, PaletteGenerators/SiteBuilderGenerator.nb}, {ContextLoader, Templates/ContextLoader.wl}, {CuratedDataTemplate, Templates/CuratedDataTemplate.nb}, {Autocomplete, Templates/Initialization/Autocomplete.wl}, {Constants, Templates/Initialization/Constants.wl}, {Dependencies, Templates/Initialization/Dependencies.wl}, {Exceptions, Templates/Initialization/Exceptions.wl}, {FrontEnd, Templates/Initialization/FrontEnd.wl}, {init, Templates/Initialization/init.wl}, {Loading, Templates/Initialization/Loading.wl}, {Paths, Templates/Initialization/Paths.wl}, {README, Templates/README.nb}, {ServiceConnectionTemplate, Templates/ServiceConnectionTemplate.nb}, {Frameworks, Templates/Frameworks}, {CuratedData, Templates/Frameworks/CuratedData}, {$ServiceConnection, Templates/Frameworks/$ServiceConnection}, {Initialization, Templates/Initialization}, {SiteBuilder, Templates/SiteBuilder}, {DocumentationSite, Templates/SiteBuilder/DocumentationSite}, {PacletServer, Templates/SiteBuilder/PacletServer}, {TutorialSite, Templates/SiteBuilder/TutorialSite}, {WebSite, Templates/SiteBuilder/WebSite}, {template_lib, Themes/template_lib}, {include, Themes/template_lib/include}, {static, Themes/template_lib/static}, {templates, Themes/template_lib/templates}, {tipuesearch, Themes/template_lib/tipuesearch}}|>, FrontEnd -> <|Prepend -> True|>, PacletServer -> <|Tags -> {documentation, front-end, paclets, web}, Categories -> {Development}, Description -> A general purpose package that implements useful functionality for application development. Features include: distribution tools, documentation generation, front-end manipulation, and application editing , License -> MIT|>|>
LastModified: 2018-06-29 14:19:18
License: MIT
Modified: 2018-09-26 16:38:01
Name: BTools
Slug: btools
Tags: documentation,front-end,paclets,web
Thumbnail: PacletIcon.png
URL: https://github.com/b3m2a1/mathematica-BTools
Version: 2.1.30

<a id="btools" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

# BTools

![BTools]({filename}/img/BTools/PacletIcon.png)

A general purpose package that implements useful functionality for application development. Features include: distribution tools, documentation generation, front-end manipulation, and application editing 

---

<a id="install" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Install

**Before installing, be sure to check out the ** **[Change Log](https://paclets.github.io/PacletServer/pages/log.html)** ** to make sure that you trust the developer.**

To install this paclet, run:

    PacletInstall[
      "BTools",
      "Site"->
        "http://raw.githubusercontent.com/paclets/PacletServer/master"
      ]

Depending on what the current value of  ```$ContextPath``` is you may also need to first run

    Needs["PacletManager`"]

* To update it, replace  ```PacletInstall``` with  ```PacletUpdate``` . 

* To uninstall replace  ```PacletInstall``` with  ```PacletUninstall``` and remove the  ```"Site"``` parameter.

---

<a id="basic-information" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Basic Information

### Name

BTools

### Version

2.1.30

### Creator

[b3m2a1@gmail.com](mailto:b3m2a1@gmail.com)

### URL

[https://github.com/b3m2a1/mathematica-BTools](https://github.com/b3m2a1/mathematica-BTools)

### License

MIT

---

<a id="extra-information" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Extra Information

This package provides no extra information

---

<a id="extensions" style="width:0;height:0;margin:0;padding:0;">&zwnj;</a>

## Extensions

### Kernel

* Root: .

* Context: BTools`

### Resource

* Root: Resources

* Resources

  * Icons

  * PaletteGenerators

  * Templates

  * Themes

  * {PacletIcon, Icons/PacletIcon.png}

  * {PacletSiteIcon, Icons/PacletSiteIcon.png}

  * {AppManagerPaletteGenerator, PaletteGenerators/AppManagerPaletteGenerator.nb}

  * {CuratedDataHelperGenerator, PaletteGenerators/CuratedDataHelperGenerator.nb}

  * {DocumentationGenerator, PaletteGenerators/DocumentationGenerator.nb}

  * {EncodedCacheManagerGenerator, PaletteGenerators/EncodedCacheManagerGenerator.nb}

  * {HTMLHelperGenerator, PaletteGenerators/HTMLHelperGenerator.nb}

  * {PacletServerManagerGenerator, PaletteGenerators/PacletServerManagerGenerator.nb}

  * {PaletteTemplate, PaletteGenerators/PaletteTemplate.nb}

  * {PelicanHelperGenerator, PaletteGenerators/PelicanHelperGenerator.nb}

  * {ServiceConnectionHelperGenerator, PaletteGenerators/ServiceConnectionHelperGenerator.nb}

  * {SiteBuilderGenerator, PaletteGenerators/SiteBuilderGenerator.nb}

  * {ContextLoader, Templates/ContextLoader.wl}

  * {CuratedDataTemplate, Templates/CuratedDataTemplate.nb}

  * {Autocomplete, Templates/Initialization/Autocomplete.wl}

  * {Constants, Templates/Initialization/Constants.wl}

  * {Dependencies, Templates/Initialization/Dependencies.wl}

  * {Exceptions, Templates/Initialization/Exceptions.wl}

  * {FrontEnd, Templates/Initialization/FrontEnd.wl}

  * {init, Templates/Initialization/init.wl}

  * {Loading, Templates/Initialization/Loading.wl}

  * {Paths, Templates/Initialization/Paths.wl}

  * {README, Templates/README.nb}

  * {ServiceConnectionTemplate, Templates/ServiceConnectionTemplate.nb}

  * {Frameworks, Templates/Frameworks}

  * {CuratedData, Templates/Frameworks/CuratedData}

  * {$ServiceConnection, Templates/Frameworks/$ServiceConnection}

  * {Initialization, Templates/Initialization}

  * {SiteBuilder, Templates/SiteBuilder}

  * {DocumentationSite, Templates/SiteBuilder/DocumentationSite}

  * {PacletServer, Templates/SiteBuilder/PacletServer}

  * {TutorialSite, Templates/SiteBuilder/TutorialSite}

  * {WebSite, Templates/SiteBuilder/WebSite}

  * {template_lib, Themes/template_lib}

  * {include, Themes/template_lib/include}

  * {static, Themes/template_lib/static}

  * {templates, Themes/template_lib/templates}

  * {tipuesearch, Themes/template_lib/tipuesearch}

### FrontEnd

* Prepend: True