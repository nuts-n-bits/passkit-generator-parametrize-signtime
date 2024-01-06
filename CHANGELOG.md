# Changelog

## 3.1.11 - 15 Aug 2023

    Fixed beacons `major` validation to be more relaxed (PR #158);

## 3.1.10 - 09 Aug 2023

    Fixed dates processing by converting them to UTC (PR #155);

## 3.1.9 - 03 Apr 2023

    Fixed transitType which wasn't being imported when a boardingPass was getting read (PR #138)
    Improved types for property in Field type (PR #139)

## 3.1.8 - 26 Mar 2023

    Fixed Typescript type for Semantics.WifiAccess (PR #136)

## 3.1.7 - 14 Nov 2022

    Fixed generation of EventTicket with row fields (PR #118)

## 3.1.6 - 29 Mar 2022

    Optimizations for localizationEntries, PKPass.pack, localize and regexes;
    Dependencies Update;

## 3.1.5 - 22 Feb 2022

    Fixed FieldsArray order when pushing or unshifting fields in `headerFields`, `primaryFields`, `secondaryFields`, `auxiliaryFields` and `backFields` (PR #104)

## 3.1.4 - 07 Feb 2022

    Fixed Schema validation for browser-like contexts like Cloudflare Workers (PR #100);
    Added examples for Cloudflare Workers;

## 3.1.3 - 16 Jan 2022

    Updated dependencies to remove dependabot alerts (like, node-forge to v1.2.1);
    Updated tests;

## 3.1.2 - 30 Dec 2021 (Happy new year!)

    This release fixes some issues when running under Windows and adds new tests.
    Thanks to PR #99 by d34db4b3.

## 3.1.1 - 25 Dec 2021 (Merry Christmas!)

    This release fixes some issues with typescript strict mode (as much as we were able to fix without starting ho-ho-ho-ing due to madness 🤪).

## 3.1.0 - 11 Dec 2021

    Made PKPass.from's Template `certificates` to be optional;
    Changed constructor buffers and certificates to be optional;
    Added constructor check on certificates to avoid error if pass is created through `PKPass.from` but without certificates;
    Added constructor checks for buffers with a warning being fired if the passed parameter is not an object;

## 3.0.0 / 3.0.1 - 31 Oct 2021

    Passkit-generator has been completely refactored and re-conceptualized. Follow [Migration Guide v2 to v3](https://github.com/alexandercerutti/passkit-generator/wiki/Migrating-from-v2-to-v3) to see the differences between the two versions

---

## 2.0.8 - 25 Aug 2021

    Added support for optional NFC key `requiresAuthentication`;
    Added support for semantics as a global overridable property;
    Renamed files to conform to Apple naming in documentation;
    Added documentation links in files;

## 2.0.7 - 21 Jun 2021

    Fixed wrong Schemas keys (ignore*s*TimeZone and dataDetectorType*s*);
    Added more SemanticsTagTypes
    Refactored Error system;
    Refactored Schemas;
    Updated Dependencies;
    Removed unnecessary ways to perfom ways in refactoring;

## 2.0.6 - 09 Feb 2021

    Improved building phase;
    Improved tests;
    Updated dependencies (like node-forge and node-fetch, which had critical vulnerability);
    Added prettier for formatting;
    Generic improvements to code;
    Removed moment.js for an internal generation of the date (without timezone support);

## 2.0.5 - 06 Sep 2020

    Replaced deprecated dependencies @hapi/joi with Sideway's joi;
    Generic dependencies update;
    Generic code improvements (vscode-autofixes included);
    Bumped minimum Node.JS supported version to 10 (moved from `util.promisify` approach to `fs.promises`);

## 2.0.4 - 14 Dec 19

    Typescript strict configuration fixes;
    Improved specifications;

## 2.0.3 - 06 Dec 19

    Dependencies Updates;
    More improvements;

## 2.0.2

    Unlocked some other prohibited (until now) fields that were not editable due to design choice (	organizationName, passTypeIdentifier, teamIdentifier, appLaunchURL, associatedStoreIdentifiers);
    Small improvements;

---

## 2.0.1

    Typescript version update;
    Update to webServiceURL schema regex and allowed all characters for authenticationToken;

---

## 2.0.0

This version brings lot of improvements and breaking changes.
Please refer to the [Migration Guide](https://github.com/alexandercerutti/passkit-generator/wiki/Migrating-from-v1-to-v2) for the most important changes.

---

## 1.6.8

[ [#74903938b](/commit/74903938be565fbd8bdb4e99aae2129caf5f1dc6) ]

    Added optional row attribute for auxiliaryFields

---

## 1.6.6

[ [#f37f978e2](/commit/f37f978e2c614d3eb9df001bd059a056ff1b6952) ]

    Fixed problem with fieldsArray: fields were being added even if the keys check was failing

---

## 1.6.5

[ [#f29203149](/commit/f2920314947e8e45f00bcfb83be676261950d37a) ]

    Added support for logoText in supportedOptions (issues #21, #28)

[ [#6451a3c37](/commit/6451a3c37866cbdd88b275a4bc3fdff46c3bd3c7) ]

    Fixed nfc methods which was accepting and registering an array instead of an object

[ [#4ce889d65](/commit/4ce889d6558678f01a993dcbd3e60b568e787638) ]

    Adding support for native Dates (#32)

[ [#0e46d855e](/commit/0e46d855e43c2fd736aee0e43c5c993fbc41a0b9) ]

    Fixing passes parallel generation (#31)

---

## 1.6.4

[ [#903192522](/commit/903192522c2646c42a020b5c554ca263315094fc) ]

    Added windows path slash parsing

---

## 1.6.1 --> 1.6.3

[ Subsequent commits ]

    Fixes to problems in 1.6.1

[ [#baf096c38](/commit/baf096c38067aae0ec459487db865851531f97b2) ]

    Moved some utility functions to a separate file

[ [#37a9a051c](/commit/37a9a051c6c54216c7937520e7a144c83caa0bdb) ]

    Removed rgbValues as a variable for a direct approact

[ [#3de654759](/commit/3de6547591fc69464b235e55381343a60adaba09) ]

    Renamed _validateType in _hasValidType

[ [#17e64a08a](/commit/17e64a08aec63026b738af5d779185aad2433bb7) ]

    Fixed barcode legacy bug

[ [#3338ff7b8](/commit/3338ff7b8fe57d9496f2e50306a5c44ea2a78b3a) ]

    Added NO_PASS_TYPE as message

[ [#bd8643b20](/commit/bd8643b2089fd637c86ab47162cfceff45f18a48) ]

    Moved passExtractor function to class scope instead of generate()'s

[ [#18893ac74](/commit/18893ac7421518d2cf1d404060ccda7ceea145c5) ]

    Moved to async/await approach for generate()

---

## 1.6.0

[ [#c559a7f1c](/commit/c559a7f1ceb69f9af07234377a38fbc3eb40a1ba) ]

    Improved unique fields management;
    Changed debug message for discarded fields;
    Renamed uniqueKeys to fieldsKeys

[ [#f7d082352](/commit/f7d082352872218fd99c0cf2991145ec28395f04) ]

    Added BRC_BW_FORMAT_UNSUPPORTED to not let PKBarcodeFormatCode128 to be used as backward barcode format

[ [#43e687b2f](/commit/43e687b2f42b687222d61abdcc78b8b88011d6c1) ]

    Added support for row field in auxiliaryFields

[ [#40f72ac43](/commit/40f72ac434e4eaf2c9e2dbc8bf7d135c97df0f4c) ]

    Added support to semantics keys to fields in schema

---

## 1.5.9

[ [#7bad48107](/commit/7bad48107015aa8339037bc1069fd41a3efbf2d2) ]

    Removed check for changeMessage as per issue topic #15

[ [#fd5efded1](/commit/fd5efded1124b0f7de6c1e69d6a1a28e1bb7bf2b) ]

    Added pass.strings file concatenation with translations if it already exists
    in specific folder;

[ [#d992b392c](/commit/d992b392c585dffcb32eb0720dfa4b103cfb926c) ]

    Small changes to messages;

---

## 1.5.8

[ [#654e2b5dc](/commit/654e2b5dce7b4297795d6ba93b8eb23fee8e5795) ]

    Now checking both static list and remote list before raising the error for missing files
    (thank you, Artsiom Aliakseyenka);

[ [#a62d8f35e](/commit/a62d8f35ea00021562ff4855dbb2e6a00001534a) ]

    Renamed __barcodeAutogen to barcodesFromUncompleteData and moved it outside of Pass class;

    Renamed __barcodeAutocomplete to Symbol/barcodesFillMissing;

    Renamed __barcodeChooseBackward to Symbol/barcodesSetBackward;

    Removed context binding when passing above methods with alises after using .barcode();

[ [#d5d4d9617](/commit/d5d4d9617f50bd5a709a260d4c1312fee69359d2) ]

    Edited BRC_ATC_MISSING_DATA message

---

## 1.5.7

[ [#c0994b80b](/commit/c0994b80be62023872de0251b45d19a66145f9ef) ]

    Moved tests to spec folder with jasmine configuration

[ [#33ca24d28](/commit/33ca24d28d09caad6c5eb0cde949b13a9053faf3) ]

    Fixed barcodes validation problem

[ [#7c2540a93](/commit/7c2540a93d46e0ba71400b2eb5e0fceee9dd6445) ]

    Re-engineered FieldContainer (now FieldsArray) to extend successfully array with its methods.

---

## 1.5.6

[ [#5e917d6db](/commit/5e917d6dbbf4445480bb4a5cd782745f7f391194) ]

    Updated documentation

[ [#bf2b8f655](/commit/bf2b8f655e35e0d9d1a7d6e837c9a234fd663a41) ]

    Added content-certificates support;
    Fixed problem with supported options

[ [#a9f71f113](/commit/a9f71f113d1093532c6899e05abcdf540be3ac17) ]

    Added description to be available for override (thank you, Artsiom Aliakseyenka);

---

## 1.5.5

[ [#14582ba9d](/commit/14582ba9d0fc15fcbdb350b96120b1f85846fa58) ]

    Schema: changed webServiceURL Regex and authenticationToken binding to this one

[ [#02a932ce7](/commit/02a932ce7a9eac0b444ba0367f861bdbb701c880) ]

    Schema: removed filter function for getValidated to return empty object in case of error;

    Added OVV_KEYS_BADFORMAT message to throw in case of error;

---

## 1.5.4

[ [#71cb678cf](/commit/71cb678cfa7b9934f4f441acd013de0f2b40ca9f) ]

    Added .npmignore to exclude examples upload

[ [#1d1f9f9c9](/commit/1d1f9f9c9082d49a5252c4fe8f98e8c8a0a61930) ]

    Replaced findIndex for find to get directly the pass type.

[ [#b32c2efcd](/commit/b32c2efcd096a29b374cc1c2ff0f8506023c7d5c) ]

    Added function assignLength to wrap new objects with length property.

[ [#e4b3436b4](/commit/e4b3436b468b196649097e2f4c43b7f44ae1b073) ]

    Converted schemas arrow functions to functions and added descriptive comments.

[ [#5e4d3b8ca](/commit/5e4d3b8ca1366fd4b30eeb674665a5ee149be087) ]

    Added noop function instead creating new empty functions.

---

## 1.5.3

[ [#56da2a390](/commit/56da2a3908c0d54a73288ca13f223a909d997998) ]

    Bugfix: when overrides is not passed as option, the pass does not get generated.

---

## 1.5.2

[ [#47ff693b6](/commit/47ff693b662d495fa1012d8a7c90880fb50e056b) ]

    Added schema support for sharingProhibited (not documented in ppfr)

---

## 1.5.1

[ [#572605ef4](/commit/572605ef471c28c3e19e84f0a050af0949301f1a) ]

    Updated declaration file

[ [#9a9d883d3](/commit/9a9d883d3fb00716790ba785bbda1ffc5f7563ce) ]

    Fixed problem in error message resolving on multiple %s;

    Added debug messages in messages.js;

    Added more comments;

    Moved literal debug messages to messages.js;

    Edited formatMessage (was formatError) to check also among debugMessages

[ [#27339bfda](/commit/27339bfdac3f973b10e111a9604fd32db5c074fc) ] - Minor improvements

---

## 1.5.0

[ [#cf5c99b16](/commit/cf5c99b16a62613e6225fbf0d5587aa8bb58616b) ]

    Moved _parseCertificates outside of pass and renamed it in readCertificates;

    Changed readCertificates to return object containing name:parsed-pem;

Added readCertificates and this.Certificates merging before model reading;

---

## 1.4.2

[ [#92fc5f826](/commit/92fc5f8264e14f89bfff039dc7985493b74d5c7b) ]

    Minor changes to READMEs and core.

[ [#96e2b628f](/commit/96e2b628fe0204a188d7dbb32bf125a987100caf) ]

    Updated documentation

---

## 1.4.1

[ [#4b65e76be](/commit/4b65e76be76c6e6a33a53f16c5447396fb307c2c),
[#2a71d0778](/commit/2a71d07788e286da993b601791dba8778152fd6d) ]

    [PR MERGE] Fix model initialization validation

[ [#96e2b628f](/commit/153108ad446ef4d8827207a3dcbb27108c0e4d7a) ]

    Improved README

[ [#96e2b628f](/commit/ab6dd4ff68309d5b678eef36182272576790e12b) ]

    Added logo in assets and README

[ [#96e2b628f](/commit/b305633ed382043567fef6ac4f771febf401d001) ]

    Added updates for OpenSSL for Windows in termal steps for cers generation

[ [#9055390bb](/commit/9055390bb32bce571857d6e348e34696fa9c3738) ]

    Updated dependencies minimum version

---

## 1.4.0

[ [#1ca53adc4](/commit/1ca53adc4debeb67d9a65797ffabd90841de8c21) ]

    Added working example for load

[ [#4b2aa68ff](/commit/4b2aa68ffba1dec2a55126e4d2067f7150b8188c) ]

    Added .load type definition

[ [#8398e077b](/commit/8398e077b1988512af57852e2c7a881a9f2abedf) ]

    Fix typos for non-mac guide

[ [#2e344e436](/commit/2e344e4367a395a66796a83e21657eec492373d1) ]

    Added .load to documentation;
    Removed express from dev dependencies;

[ [#b68dfe0d8](/commit/b68dfe0d8025a68b137cfc37c8b9f34a404c05e7) ]

    Added .load function to fetch pictures from the web and implemented fetching function inside logic flow
