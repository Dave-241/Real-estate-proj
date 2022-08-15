"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/fetchapi.js
var fetchapi = __webpack_require__(5552);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__(5856);
// EXTERNAL MODULE: external "millify"
var external_millify_ = __webpack_require__(9542);
var external_millify_default = /*#__PURE__*/__webpack_require__.n(external_millify_);
// EXTERNAL MODULE: ./assets/house.jpg
var house = __webpack_require__(8829);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/property.jsx












const Property = props => {
  const {
    property
  } = props;
  const {
    price,
    coverPhoto,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID
  } = property;
  console.log(externalID);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [Property ? /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: `/property/${externalID}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          flexWrap: "wrap",
          w: "350px",
          p: "5",
          justifyContent: "center",
          cursor: "pointer",
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: coverPhoto ? coverPhoto.url : house/* default */.Z,
              alt: "house",
              width: "400",
              height: "260"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
            w: "full",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              paddingTop: "2",
              alignItems: "center",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                alignItems: "center",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  paddingRight: "3",
                  color: "green.400",
                  children: isVerified && /*#__PURE__*/jsx_runtime_.jsx(go_.GoVerified, {})
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
                  fontWeight: "bold",
                  fontSize: "lg",
                  children: ["AED ", external_millify_default()(price), " ", rentFrequency && `/${rentFrequency}`]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
                  size: "sm",
                  src: agency?.logo?.url
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              alighItems: "center",
              p: "1",
              justifyContent: "space-between",
              w: "250px",
              color: "blue.400",
              children: [rooms, " ", /*#__PURE__*/jsx_runtime_.jsx(fa_.FaBed, {}), " | ", baths, " ", /*#__PURE__*/jsx_runtime_.jsx(fa_.FaBath, {}), " | ", external_millify_default()(area), " sqft ", /*#__PURE__*/jsx_runtime_.jsx(bs_.BsGridFill, {})]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "lg",
              children: title.length > 30 ? `${title.substring(0, 30)}...` : title
            })]
          })]
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "hi"
    }), " "]
  });
};

/* harmony default export */ const components_property = (Property);
;// CONCATENATED MODULE: ./pages/index.js










const Banner = props => {
  const {
    purpose,
    title1,
    title2,
    desc1,
    desc2,
    buttonText,
    linkName,
    imageUrl
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    m: "10",
    children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      src: imageUrl,
      width: 500,
      height: 300,
      alt: "banner"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      p: "5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        color: "gray.500",
        fontSize: "sm",
        fontWeight: "medium",
        children: [" ", purpose, " "]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        fontSize: "xxl",
        fontWeight: "bold",
        children: [" ", title1, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", title2, "  "]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        fontSize: "lg",
        fontWeight: "medium",
        paddingTop: "3",
        paddingBottom: "3",
        color: "gray.700",
        children: [" ", desc1, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", desc2, " "]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        fontSize: "xl",
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: linkName,
          children: buttonText
        })
      })]
    })]
  });
};

function Home({
  propertiesForSale,
  propertiesForRent
}) {
  const {
    0: domLoaded,
    1: setDomLoaded
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setDomLoaded(true);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: domLoaded && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Banner, {
        purpose: "RENT A HOME",
        title1: "Rental homes for",
        title2: "Everyone",
        desc1: "Explore Apartment, Villas, Homes",
        desc2: "and more",
        buttonText: "Explore Renting",
        linkName: "/search?purpose=for-rent",
        imageUrl: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        flexWrap: "wrap",
        justifyContent: "center",
        children: propertiesForSale.map(property => /*#__PURE__*/jsx_runtime_.jsx(components_property, {
          property: property
        }, property.id))
      }), /*#__PURE__*/jsx_runtime_.jsx(Banner, {
        purpose: "BUY A HOME",
        title1: "Find, Buy & Own Your",
        title2: "Dream Home",
        desc1: "Explore Apartment, Villas, Homes",
        desc2: "and more",
        buttonText: "Explore Buying",
        linkName: "/search?purpose=for-sale",
        imageUrl: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        flexWrap: "wrap",
        justifyContent: "center",
        children: propertiesForRent.map(property => /*#__PURE__*/jsx_runtime_.jsx(components_property, {
          property: property
        }, property.id))
      })]
    })
  });
}
async function getStaticProps() {
  const propertyForSale = await (0,fetchapi/* fetchApi */.a)(`${fetchapi/* baseUrl */.F}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await (0,fetchapi/* fetchApi */.a)(`${fetchapi/* baseUrl */.F}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  };
}

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9542:
/***/ ((module) => {

module.exports = require("millify");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664,675,688], () => (__webpack_exec__(2247)));
module.exports = __webpack_exports__;

})();