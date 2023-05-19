console.log("Hi from store.js");

let scope = {};

function setScope(params) {
  scope = {
    access: {
      name: "",
      details: [],
      startedAt: null,
      renewsOn: null,
      alreadyPurchased: null,
      canBeRenewed: null,
      canBeRenewedUsingExistedUPI: null,
      renewChargeAmount: null,
      renewChargeCurrency: null,
      renewChargeDisplayAmount: null,
      renewFirstRealPriceWithTax: null,
      inRenewal: null,
    },
    activeMeters: [],
    affiliateState: {
      issuerId: "https://www.piano.io",
      premium: "false",
      redemptionCandidateItemId: null,
      creditStates: [],
      userId: "anon",
      targetGroups: {
        l1: "target",
        l2: null,
      },
    },
    app: {
      name: "WR - Westfälische Rundschau",
      image1: "/ml/cropped_zehwzZh5I7_1_phqaej.png",
      aid: "zehwzZh5I7",
      useTinypassAccounts: false,
      userProvider: "piano_id_lite",
      businessUrl: "https://www.wr.de/",
      canInitCheckoutWithAnon: false,
    },
    billingConfig: {
      countryCode: "DE",
      zipCode: "45141",
      billingAddressPrefilled: false,
      needResidence: false,
      sameResidence: true,
      postalCodeError: false,
      countrySelectorError: false,
      billingAddress: {
        region: {},
        country: {},
      },
      savedBillingAddress: {
        region: {},
        country: {},
      },
      residenceCountryCode: null,
      vatLabel: "MwSt",
      taxIncludeBilling: true,
      showVAT: false,
      geoCountryCode: "DE",
      geoZipCode: "45141",
      renewBillingCountryCode: null,
      renewBillingZipCode: null,
      renewResidenceCountryCode: null,
      countryTaxSupport: null,
      taxCountries: [],
    },
    browserId: "ldok6tw5e282urw8",
    custom: {
      __cm_composer: "opt-in",
      default: "true",
      e2p_refUrl:
        "https://www.wr.de/staedte/dortmund/erdbebenkatastrophe-ich-erkenne-meine-heimat-nicht-wieder-id237589241.html",
      e2p_promoSlot: "",
      e2p_staticAccount: "",
      e2p_titleCode: "nrw-wr",
      e2p_isSection: "false",
      e2p_isArticle: "true",
      e2p_articleType: "news",
      e2p_articleId: "237589241",
      e2p_paidState: "true",
      e2p_isPlusPage: "",
    },
    customCookies: {
      _pc_payment: "standard",
      _pc_ipc: "pwx",
    },
    errorInstanceId: "oj6daOG9UpoNW2xI",
    errors: [],
    externalCheckoutConfig: {
      name: "swg",
      class: "swg-button",
      title: "Subscribe with Google",
    },
    flags: {
      selectedTerm: {},
      isRenewNow: false,
      selectedPaymentMethod: null,
      termComplete: false,
      paymentComplete: false,
      termSelectorActivated: false,
      receiptActivated: false,
      hasLoginRequiredCallback: true,
      autoCompleteRegistrationTerm: true,
      needUpdateUserResources: false,
      isPaymentMethodChanged: true,
      affiliateState: {
        issuerId: "https://www.piano.io",
        premium: "false",
        redemptionCandidateItemId: null,
        creditStates: [],
        userId: "anon",
        targetGroups: {
          l1: "target",
          l2: null,
        },
      },
      isCaptchaV3Enabled: false,
      isAddressFormNeedLocalValidation: false,
    },
    input: {
      oid: null,
      autoRenew: true,
      chargeDisplayAmount: null,
      chargeAmount: null,
      chargeCurrency: "USD",
      chargeCurrencySymbol: "$",
      originalChargeCurrencySymbol: null,
      originalChargeAmount: null,
      originalChargeCurrency: null,
      originalChargeDisplayAmount: null,
      renewFirstRealPriceWithTax: null,
      promotionBillingPlan: null,
      isTermLockedByPromocode: false,
      paymentMethods: [],
      receipt: {},
      user_data: {
        first_name: null,
        last_name: null,
      },
      termId: null,
      offerId: null,
      zipCode: null,
      confirmated: {
        billingPlan: null,
        chargeAmount: null,
        taxAmount: null,
        total: null,
        taxRate: null,
        hstRate: null,
        hstAmount: null,
        qstRate: null,
        qstAmount: null,
        pstRate: null,
        pstAmount: null,
        gstRate: null,
        gstAmount: null,
      },
      credit_card: {},
      paypalBt: {},
      applePayBt: {},
      consents: [
        {
          consentPubId: "CBCN6QM98T44L",
          displayText:
            'Es gelten die <a href="https://www.wr.de/abo/allgemeine-geschaeftsbedingungen" target="_blank" >AGB und Nutzungsbedingungen</a> der FUNKE Medien NRW GmbH.\n\nWir speichern und verwenden Ihre personenbezogenen Daten im Rahmen der Vertragserfüllung. Darüber hinaus nutzen wir Ihre Adressdaten inklusive der E-Mail-Adresse, um Sie über interessante eigene Angebote zu informieren. Außerdem nehmen wir individuelle Messungen, Speicherung und Auswertung von Öffnungsraten und Klickraten zur Verarbeitung in Empfängerprofilen zwecks Gestaltung künftiger Newsletter entsprechend den Interessen unserer Leser vor. Sie können dieser Verwendung Ihrer personenbezogenen Daten gegenüber der FUNKE Medien NRW GmbH jederzeit per E-Mail an werbeabmeldung@funkemedien.de kostenlos widersprechen.',
          fieldName: "Nutzung / SoftOptin",
          fieldId: "FNSOI0009",
          sortOrder: 2,
          checked: true,
          required: true,
        },
      ],
      canadianTaxes: [],
      customFormTermId: null,
    },
    params: {
      aid: "zehwzZh5I7",
      displayMode: "inline",
      iframeId: "offer-0-AN9aC",
      offerId: "OFN80UYHOCQK",
      tags: "isPaidContent",
      templateId: "OTE5LR343LVH",
      templateVariantId: "OTVFAXK9H3MF4",
      url: "https://www.wr.de/staedte/dortmund/erdbebenkatastrophe-ich-erkenne-meine-heimat-nicht-wieder-id237589241.html",
      width: 684,
      trackingId:
        "{kpdx}AAAAvVkt7nrwrgoKemVod3paaDVJNxIQbGR3eGVwNXBldm5yc3FzdBoMRVg2SzFXTzVLSTI0IiUxODA3dDJnMGJvLTAwMDAzMWhsamY3NnEwam1jdWFxajQwMjJjKhhzaG93T2ZmZXJFMkRBRFM4RlMwN0paRDkwAToMT1RFNUxSMzQzTFZIQg1PVFZGQVhLOUgzTUY0UhJ2LWxkd3c2bWx0YW52M2J5cjdaDDUuMTQ3LjQ5LjE5NWIDZHdjaIiqmJ8GcAN4DA",
      experienceId: "EX6K1WO5KI24",
    },
    terms: [
      {
        termId: "TM0V14GU23UC",
        name: "1. Monat nur 0,99 € für Neukundschaft",
        description: "Regulär 4,99 € / Monat, monatlich kündbar",
        type: "payment",
        resource: {
          name: "WR PLUS",
          description: "",
          rid: "WR8900PC",
          url: null,
          imageUrl: null,
        },
        displayLine:
          "4,99 € pro Monat / mit Probeversion zu 0,99 € für 1 Monat",
        billingPlanTable: [
          {
            date: "Heute",
            period: "Monat",
            shortPeriod: " for month",
            originalPrice: "",
            billingPeriod: "1 Monat",
            priceChargedStr: "0,99 €",
            priceValue: 0.99,
            cycles: "1",
            isFreeTrial: "false",
            isTrial: "true",
            isPayWhatYouWant: "false",
            billing: "eine Zahlung von 0,99 €",
            duration: "1 Monat Zugriff",
            billingInfo: "eine Zahlung von 0,99 €",
            isFree: "false",
            pricelessBillingPre: "eine Zahlung von ",
            price: "0,99 €",
            priceAndTax: 0.99,
            pricelessBillingPost: "",
            currency: "EUR",
            originalPriceValue: null,
            totalBilling: "eine Zahlung von 0,99 €",
          },
          {
            date: "9. März 2023",
            period: "Monat",
            shortPeriod: "/mo",
            originalPrice: "",
            billingPeriod: "1 Monat",
            priceChargedStr: "4,99 €",
            priceValue: 4.99,
            cycles: "2147483647",
            isPayWhatYouWant: "false",
            billing: "4,99 € pro Monat",
            duration: "monatlich bis zur Kündigung",
            billingInfo: "4,99 € pro Monat",
            isFree: "false",
            pricelessBillingPre: "",
            price: "4,99 €",
            priceAndTax: 4.99,
            pricelessBillingPost: " pro Monat",
            currency: "EUR",
            originalPriceValue: null,
            totalBilling: "4,99 € pro Monat",
          },
        ],
        chargeDisplayAmount: "0,99 €",
        chargeAmount: 0.99,
        chargeAmountInMinorUnit: 99,
        taxAmount: "0,00 €",
        hstAmount: "0,00 €",
        qstAmount: "0,00 €",
        pstAmount: "0,00 €",
        gstAmount: "0,00 €",
        taxRate: null,
        hstRate: null,
        qstRate: null,
        pstRate: null,
        gstRate: null,
        price: "0,99 €",
        totalAmount: "0,99 €",
        termLevelTaxProductCategory: "",
        chargeCurrency: "EUR",
        chargeCurrencySymbol: "€",
        isSubscription: true,
        hasFreeTrial: false,
        isSchedule: false,
        firstRealPrice: "0,99 €",
        firstRealPriceWithTax: "0,99 €",
        oneOffPaymentMethods: [
          {
            id: 4,
            name: "Kreditkarte",
            identifier: "credit",
            paymentTypeId: "credit_card",
            authSupported: true,
            captchaSupported: true,
            customTitle: null,
          },
          {
            id: 11,
            name: "Paypal",
            identifier: "paypalbt",
            paymentTypeId: "paypal",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 25,
            name: "Apple Pay",
            identifier: "applepaybt",
            paymentTypeId: "apple_pay",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 32,
            name: "Klarna",
            identifier: "klarna",
            paymentTypeId: "direct_debit",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
        ],
        subscriptionPaymentMethods: [
          {
            id: 4,
            name: "Kreditkarte",
            identifier: "credit",
            paymentTypeId: "credit_card",
            authSupported: true,
            captchaSupported: true,
            customTitle: null,
          },
          {
            id: 11,
            name: "Paypal",
            identifier: "paypalbt",
            paymentTypeId: "paypal",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 25,
            name: "Apple Pay",
            identifier: "applepaybt",
            paymentTypeId: "apple_pay",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 32,
            name: "Klarna",
            identifier: "klarna",
            paymentTypeId: "direct_debit",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
        ],
        isCustomPriceAvailable: false,
        isZero: false,
        isPaymentMethodRequired: true,
        forceAutoRenew: true,
        newCustomersOnly: false,
        firstPeriod: "1 Monat",
        sellDate: null,
        hasFinishedSales: false,
        restrictCheckoutProcess: false,
        originalBillingPlan: null,
        sku: null,
        giftEmailSendStartTime: null,
        giftEmailSendEndTime: null,
        sharedAccountCount: null,
        authorizationAmount: null,
        externalProductIds: null,
        subscriptionManagementUrl: null,
        customData: null,
        verificationAmount: null,
        verificationAmountWithTax: null,
        withNewCustomerBillingPlan: true,
        allowPromoCodes: true,
        selected: false,
      },
      {
        termId: "TMBWZE8NIOE7",
        name: "12 Monate für 40 €",
        description: "Danach: 4,99 € / Monat und monatlich kündbar",
        type: "payment",
        resource: {
          name: "WR PLUS",
          description: "",
          rid: "WR8900PC",
          url: null,
          imageUrl: null,
        },
        displayLine:
          "4,99 € pro Monat / mit Probeversion zu 40,00 € für 1 Jahr",
        billingPlanTable: [
          {
            date: "Heute",
            period: "Jahr",
            shortPeriod: " for year",
            originalPrice: "",
            billingPeriod: "1 Jahr",
            priceChargedStr: "40,00 €",
            priceValue: 40,
            cycles: "1",
            isFreeTrial: "false",
            isTrial: "true",
            isPayWhatYouWant: "false",
            billing: "eine Zahlung von 40,00 €",
            duration: "1 Jahr Zugriff",
            billingInfo: "eine Zahlung von 40,00 €",
            isFree: "false",
            pricelessBillingPre: "eine Zahlung von ",
            price: "40,00 €",
            priceAndTax: 40,
            pricelessBillingPost: "",
            currency: "EUR",
            originalPriceValue: null,
            totalBilling: "eine Zahlung von 40,00 €",
          },
          {
            date: "9. Februar 2024",
            period: "Monat",
            shortPeriod: "/mo",
            originalPrice: "",
            billingPeriod: "1 Monat",
            priceChargedStr: "4,99 €",
            priceValue: 4.99,
            cycles: "2147483647",
            isPayWhatYouWant: "false",
            billing: "4,99 € pro Monat",
            duration: "monatlich bis zur Kündigung",
            billingInfo: "4,99 € pro Monat",
            isFree: "false",
            pricelessBillingPre: "",
            price: "4,99 €",
            priceAndTax: 4.99,
            pricelessBillingPost: " pro Monat",
            currency: "EUR",
            originalPriceValue: null,
            totalBilling: "4,99 € pro Monat",
          },
        ],
        chargeDisplayAmount: "40,00 €",
        chargeAmount: 40,
        chargeAmountInMinorUnit: 4000,
        taxAmount: "0,00 €",
        hstAmount: "0,00 €",
        qstAmount: "0,00 €",
        pstAmount: "0,00 €",
        gstAmount: "0,00 €",
        taxRate: null,
        hstRate: null,
        qstRate: null,
        pstRate: null,
        gstRate: null,
        price: "40,00 €",
        totalAmount: "40,00 €",
        termLevelTaxProductCategory: "",
        chargeCurrency: "EUR",
        chargeCurrencySymbol: "€",
        isSubscription: true,
        hasFreeTrial: false,
        isSchedule: false,
        firstRealPrice: "40,00 €",
        firstRealPriceWithTax: "40,00 €",
        oneOffPaymentMethods: [
          {
            id: 4,
            name: "Kreditkarte",
            identifier: "credit",
            paymentTypeId: "credit_card",
            authSupported: true,
            captchaSupported: true,
            customTitle: null,
          },
          {
            id: 11,
            name: "Paypal",
            identifier: "paypalbt",
            paymentTypeId: "paypal",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 25,
            name: "Apple Pay",
            identifier: "applepaybt",
            paymentTypeId: "apple_pay",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 32,
            name: "Klarna",
            identifier: "klarna",
            paymentTypeId: "direct_debit",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
        ],
        subscriptionPaymentMethods: [
          {
            id: 4,
            name: "Kreditkarte",
            identifier: "credit",
            paymentTypeId: "credit_card",
            authSupported: true,
            captchaSupported: true,
            customTitle: null,
          },
          {
            id: 11,
            name: "Paypal",
            identifier: "paypalbt",
            paymentTypeId: "paypal",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 25,
            name: "Apple Pay",
            identifier: "applepaybt",
            paymentTypeId: "apple_pay",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 32,
            name: "Klarna",
            identifier: "klarna",
            paymentTypeId: "direct_debit",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
        ],
        isCustomPriceAvailable: false,
        isZero: false,
        isPaymentMethodRequired: true,
        forceAutoRenew: true,
        newCustomersOnly: false,
        firstPeriod: "1 Jahr",
        sellDate: null,
        hasFinishedSales: false,
        restrictCheckoutProcess: false,
        originalBillingPlan: null,
        sku: null,
        giftEmailSendStartTime: null,
        giftEmailSendEndTime: null,
        sharedAccountCount: null,
        authorizationAmount: null,
        externalProductIds: null,
        subscriptionManagementUrl: null,
        customData: null,
        verificationAmount: null,
        verificationAmountWithTax: null,
        withNewCustomerBillingPlan: false,
        allowPromoCodes: true,
        selected: false,
      },
      {
        termId: "TMYFPBEO2LL2",
        name: "24 Monate für 72 €",
        description: "Danach: 4,99 € / Monat und monatlich kündbar",
        type: "payment",
        resource: {
          name: "WR PLUS",
          description: "",
          rid: "WR8900PC",
          url: null,
          imageUrl: null,
        },
        displayLine:
          "4,99 € pro Monat / mit Probeversion zu 72,00 € für 24 Monate",
        billingPlanTable: [
          {
            date: "Heute",
            period: "24 Monate",
            shortPeriod: " for month",
            originalPrice: "",
            billingPeriod: "24 Monate",
            priceChargedStr: "72,00 €",
            priceValue: 72,
            cycles: "1",
            isFreeTrial: "false",
            isTrial: "true",
            isPayWhatYouWant: "false",
            billing: "eine Zahlung von 72,00 €",
            duration: "24 Monate Zugriff",
            billingInfo: "eine Zahlung von 72,00 €",
            isFree: "false",
            pricelessBillingPre: "eine Zahlung von ",
            price: "72,00 €",
            priceAndTax: 72,
            pricelessBillingPost: "",
            currency: "EUR",
            originalPriceValue: null,
            totalBilling: "eine Zahlung von 72,00 €",
          },
          {
            date: "9. Februar 2025",
            period: "Monat",
            shortPeriod: "/mo",
            originalPrice: "",
            billingPeriod: "1 Monat",
            priceChargedStr: "4,99 €",
            priceValue: 4.99,
            cycles: "2147483647",
            isPayWhatYouWant: "false",
            billing: "4,99 € pro Monat",
            duration: "monatlich bis zur Kündigung",
            billingInfo: "4,99 € pro Monat",
            isFree: "false",
            pricelessBillingPre: "",
            price: "4,99 €",
            priceAndTax: 4.99,
            pricelessBillingPost: " pro Monat",
            currency: "EUR",
            originalPriceValue: null,
            totalBilling: "4,99 € pro Monat",
          },
        ],
        chargeDisplayAmount: "72,00 €",
        chargeAmount: 72,
        chargeAmountInMinorUnit: 7200,
        taxAmount: "0,00 €",
        hstAmount: "0,00 €",
        qstAmount: "0,00 €",
        pstAmount: "0,00 €",
        gstAmount: "0,00 €",
        taxRate: null,
        hstRate: null,
        qstRate: null,
        pstRate: null,
        gstRate: null,
        price: "72,00 €",
        totalAmount: "72,00 €",
        termLevelTaxProductCategory: "",
        chargeCurrency: "EUR",
        chargeCurrencySymbol: "€",
        isSubscription: true,
        hasFreeTrial: false,
        isSchedule: false,
        firstRealPrice: "72,00 €",
        firstRealPriceWithTax: "72,00 €",
        oneOffPaymentMethods: [
          {
            id: 4,
            name: "Kreditkarte",
            identifier: "credit",
            paymentTypeId: "credit_card",
            authSupported: true,
            captchaSupported: true,
            customTitle: null,
          },
          {
            id: 11,
            name: "Paypal",
            identifier: "paypalbt",
            paymentTypeId: "paypal",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 25,
            name: "Apple Pay",
            identifier: "applepaybt",
            paymentTypeId: "apple_pay",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 32,
            name: "Klarna",
            identifier: "klarna",
            paymentTypeId: "direct_debit",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
        ],
        subscriptionPaymentMethods: [
          {
            id: 4,
            name: "Kreditkarte",
            identifier: "credit",
            paymentTypeId: "credit_card",
            authSupported: true,
            captchaSupported: true,
            customTitle: null,
          },
          {
            id: 11,
            name: "Paypal",
            identifier: "paypalbt",
            paymentTypeId: "paypal",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 25,
            name: "Apple Pay",
            identifier: "applepaybt",
            paymentTypeId: "apple_pay",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
          {
            id: 32,
            name: "Klarna",
            identifier: "klarna",
            paymentTypeId: "direct_debit",
            authSupported: true,
            captchaSupported: false,
            customTitle: null,
          },
        ],
        isCustomPriceAvailable: false,
        isZero: false,
        isPaymentMethodRequired: true,
        forceAutoRenew: true,
        newCustomersOnly: false,
        firstPeriod: "24 Monate",
        sellDate: null,
        hasFinishedSales: false,
        restrictCheckoutProcess: false,
        originalBillingPlan: null,
        sku: null,
        giftEmailSendStartTime: null,
        giftEmailSendEndTime: null,
        sharedAccountCount: null,
        authorizationAmount: null,
        externalProductIds: null,
        subscriptionManagementUrl: null,
        customData: null,
        verificationAmount: null,
        verificationAmountWithTax: null,
        withNewCustomerBillingPlan: false,
        allowPromoCodes: true,
        selected: false,
      },
    ],
    user: {
      uid: "anon",
      email: null,
      displayName: null,
      valid: false,
      firstName: null,
      lastName: null,
      confirmed: false,
    },
  };
}
setScope();

let fdpObj = {
  event: "PIANO-Event",
  eventtype: "click", //click, view
  eventname: "Detailclick", //addtoCart, promoclick, eec.whatever
  eventdescription: "KLick auf Toggle in MyAccount", // Sprechende Beschreibung
  app: {
    aid: "zehwzZh5I7",
    title: "WR - Westfälische Rundschau",
  },
  template: {
    name: "m1",
    variantName: "M1sub",
    id: "TMNEJ",
    variantId: "THSSH",
    position: "inline",
    category: "subscription",
  },
  offerId: "TMMSM",
  terms: {
    listed: ["term1", "term2", "term3"],
    selected: {
      id: "TNMMSMWE",
      name: "term1",
      hasTrial: true,
      displayLine: "4,99 € pro Monat / mit Probeversion zu 40,00 € für 1 Jahr",
      regularPrice: 4.99,
      trialBillingPeriod: "3 Monate",
      trial_Price: 40,
      resource: "WR8900PC",
    },
  },
  content: {
    url: "www.lala.de",
    id: 1123434,
    type: "article oder section",
  },
};

//too string and encode and base64

function encodeAndStore(obj, localStore) {
  let encoded64fdpObj = btoa(encodeURI(JSON.stringify(obj)));
  localStorage.setItem(localStore, encoded64fdpObj);
}

function grabAndDecode(localStore) {
  let importFdpObj = localStorage.getItem(localStore);
  return JSON.parse(decodeURI(atob(importFdpObj)));
}

encodeAndStore(fdpObj, "piO64");
let lsFdpObj = grabAndDecode("piO64");

let selfexport = fdpObj;
selfexport.export = function encodeAndStore(localStore) {
  let encoded64fdpObj = btoa(encodeURI(JSON.stringify(this)));
  localStorage.setItem(localStore, encoded64fdpObj);
};

selfexport.import = function grabAndDecode(localStore) {
  let importFdpObj = localStorage.getItem(localStore);
  selfexport = JSON.parse(decodeURI(atob(importFdpObj)));
};

function PiTrackerObject() {
  this.import = function grabAndDecode(localStore) {
    let importFdpObj = localStorage.getItem(localStore);
    selfexport = JSON.parse(decodeURI(atob(importFdpObj)));
  };
  this.export = function encodeAndStore(localStore) {
    let encoded64fdpObj = btoa(encodeURI(JSON.stringify(this)));
    localStorage.setItem(localStore, encoded64fdpObj);
  };
}

const trackingTemplate = "M1 Uno with Keycloak";
const trackingVariant = "22.easteregg";
const trackingPosition = "inline";
const trackingCategory = "subscription";
// for live
/* const trackingTemplate = [%% Tracking_Template %%];
const trackingVariant = [%% Tracking_Variant %%];
const trackingPosition = [%% Tracking_Position %%];
const trackingCategory = [%% Tracking_Category %%]; */

let selectedTermId = "TMBWZE8NIOE7";
let selectedTermIndex = scope.terms.findIndex(
  (x) => x.termId === selectedTermId
);

function setSelectedTermId() {
  //ng-click {{ term.termId }}
  // selectedTermId = ;
}

class PiObject {
  constructor(localStorageName) {
    this.actualState = "born";
    this.localStorageName = localStorageName;
    this.app = {};
    this.content = {};
    this.offerId = "";
    this.template = {};
    this.terms = {};
    this.terms.listed = [];
    this.terms.selected = {};
    this.import = function grabAndDecode(localStore) {
      let importString = this.localStorageName;
      let importFdpObj = localStorage.getItem(importString);
      selfexport = JSON.parse(decodeURI(atob(importFdpObj)));
      Object.assign(this, selfexport);
      this.actualState = "filled from storage";
    };
    this.export = function encodeAndStore() {
      let exportString = this.localStorageName;
      let encoded64fdpObj = btoa(encodeURI(JSON.stringify(this)));
      localStorage.setItem(exportString, encoded64fdpObj);
    };
    this.init = function fillPiObject() {
      this.app.aid = scope.app.aid;
      this.app.name = scope.app.name;
      this.app.code = scope.custom.e2p_titleCode;
      this.template.name = trackingTemplate;
      this.template.variantname = trackingVariant;
      this.template.position = trackingPosition;
      this.template.category = trackingCategory;
      this.template.id = scope.params.templateId;
      this.template.variantId = scope.params.templateVariantId;
      this.content.article = scope.custom.e2p_isArticle;
      this.content.section = scope.custom.e2p_isSection;
      this.content.type = scope.custom.e2p_articleType;
      this.content.paid = scope.custom.e2p_paidState;
      this.content.url = scope.custom.e2p_refUrl;
      this.content.id = scope.custom.e2p_articleId;
      this.offerId = scope.params.offerId;
      this.terms.listed = scope.terms.map((term) => term.termId);
      this.actualState = "initialized on load via function";
      //TODO: Check if User-Object edits term for trial, if user had trial before
    };
    this.enhance = function enhancePiObject() {
      this.app.aid = scope.app.aid;
      this.app.name = scope.app.name;
      this.app.code = scope.custom.e2p_titleCode;
      this.template.name = trackingTemplate;
      this.template.variantname = trackingVariant;
      this.template.position = trackingPosition;
      this.template.category = trackingCategory;
      this.template.id = scope.params.templateId;
      this.template.variantId = scope.params.templateVariantId;
      this.content.article = scope.custom.e2p_isArticle;
      this.content.section = scope.custom.e2p_isSection;
      this.content.type = scope.custom.e2p_articleType;
      this.content.paid = scope.custom.e2p_paidState;
      this.content.url = scope.custom.e2p_refUrl;
      this.content.id = scope.custom.e2p_articleId;
      this.offerId = scope.params.offerId;
      this.terms.listed = scope.terms.map((term) => term.termId);
      this.terms.selected.description =
        scope.terms[selectedTermIndex].description;
      this.terms.selected.displayLine =
        scope.terms[selectedTermIndex].displayLine;
      this.terms.selected.hasTrial = scope.terms[0].billingPlanTable.length > 1;
      this.terms.selected.termId = scope.terms[selectedTermIndex].termId;
      this.terms.selected.regularPrice =
        scope.terms[0].billingPlanTable.length > 1
          ? scope.terms[selectedTermIndex].billingPlanTable[1].price
          : scope.terms[selectedTermIndex].billingPlanTable[0].price;
      this.terms.selected.regularPriceValue =
        scope.terms[0].billingPlanTable.length > 1
          ? scope.terms[selectedTermIndex].billingPlanTable[1].priceValue
          : scope.terms[selectedTermIndex].billingPlanTable[0].priceValue;
      this.terms.selected.regularBillingPeriod =
        scope.terms[0].billingPlanTable.length > 1
          ? scope.terms[selectedTermIndex].billingPlanTable[1].billingPeriod
          : scope.terms[selectedTermIndex].billingPlanTable[0].billingPeriod;
      this.terms.selected.resource = {};
      this.terms.selected.resource.name =
        scope.terms[selectedTermIndex].resource.name;
      this.terms.selected.resource.rid =
        scope.terms[selectedTermIndex].resource.rid;
      this.terms.selected.trialPrice =
        scope.terms[selectedTermIndex].billingPlanTable[0].price;
      this.terms.selected.trialPriceValue =
        scope.terms[selectedTermIndex].billingPlanTable[0].priceValue;
      this.terms.selected.trialBillingPeriod =
        scope.terms[selectedTermIndex].billingPlanTable[0].billingPeriod;
      this.actualState = "enhanced on click via function";
      //TODO: Check if User-Object edits term for trial, if user had trial before
    };
    this.defineEvent = function makeEvent(type, name, description) {
      this.event = "PIANO-Event";
      this.eventtype = type; //click, view
      this.eventname = name; //addtoCart, promoclick, eec.whatever
      this.eventdescription = description; // Sprechende Beschreibung
    };
    this.pasteString = function createStringifiedObject() {
      let clone = JSON.stringify(Object.assign({}, this));
      return clone;
    };
    this.pasteString64 = function createStringifiedObject64() {
      let clone = btoa(encodeURI(JSON.stringify(Object.assign({}, this))));
      return clone;
    };
  }
}

setTimeout;

function fillPiObject(obname) {
  obname.app.aid = scope.app.aid;
  obname.app.name = scope.app.name;
  obname.app.code = scope.custom.e2p_titleCode;
  obname.template.name = trackingTemplate;
  obname.template.variantname = trackingVariant;
  obname.template.position = trackingPosition;
  obname.template.category = trackingCategory;
  obname.template.id = scope.params.templateId;
  obname.template.variantId = scope.params.templateVariantId;
  obname.content.article = scope.custom.e2p_isArticle;
  obname.content.section = scope.custom.e2p_isSection;
  obname.content.type = scope.custom.e2p_articleType;
  obname.content.paid = scope.custom.e2p_paidState;
  obname.content.url = scope.custom.e2p_refUrl;
  obname.content.id = scope.e2p_articleId;
  obname.terms.listed = scope.terms.map((term) => term.termId);
  obname.actualState = "initialized on load via function";
  //TODO: Check if User-Object edits term for trial, if user had trial before
}

function enhancePiObject(obname) {
  obname.app.aid = scope.app.aid;
  obname.app.name = scope.app.name;
  obname.app.code = scope.custom.e2p_titleCode;
  obname.template.name = trackingTemplate;
  obname.template.variantname = trackingVariant;
  obname.template.position = trackingPosition;
  obname.template.category = trackingCategory;
  obname.template.id = scope.params.templateId;
  obname.template.variantId = scope.params.templateVariantId;
  obname.content.article = scope.custom.e2p_isArticle;
  obname.content.section = scope.custom.e2p_isSection;
  obname.content.type = scope.custom.e2p_articleType;
  obname.content.paid = scope.custom.e2p_paidState;
  obname.content.url = scope.custom.e2p_refUrl;
  obname.content.id = scope.e2p_articleId;
  obname.terms.listed = scope.terms.map((term) => term.termId);
  obname.terms.selected.description =
    scope.terms[selectedTermIndex].description;
  obname.terms.selected.displayLine =
    scope.terms[selectedTermIndex].displayLine;
  obname.terms.selected.hasTrial = scope.terms[0].billingPlanTable.length > 1;
  obname.terms.selected.termId = scope.terms[selectedTermIndex].termId;
  obname.terms.selected.regularPrice =
    scope.terms[0].billingPlanTable.length > 1
      ? scope.terms[selectedTermIndex].billingPlanTable[1].price
      : scope.terms[selectedTermIndex].billingPlanTable[0].price;
  obname.terms.selected.regularPriceValue =
    scope.terms[0].billingPlanTable.length > 1
      ? scope.terms[selectedTermIndex].billingPlanTable[1].priceValue
      : scope.terms[selectedTermIndex].billingPlanTable[0].priceValue;
  obname.terms.selected.regularBillingPeriod =
    scope.terms[0].billingPlanTable.length > 1
      ? scope.terms[selectedTermIndex].billingPlanTable[1].billingPeriod
      : scope.terms[selectedTermIndex].billingPlanTable[0].billingPeriod;
  obname.terms.selected.resource = {};
  obname.terms.selected.resource.name =
    scope.terms[selectedTermIndex].resource.name;
  obname.terms.selected.resource.rid =
    scope.terms[selectedTermIndex].resource.rid;
  obname.terms.selected.trialPrice =
    scope.terms[selectedTermIndex].billingPlanTable[0].price;
  obname.terms.selected.trialPriceValue =
    scope.terms[selectedTermIndex].billingPlanTable[0].priceValue;
  obname.terms.selected.trialBillingPeriod =
    scope.terms[selectedTermIndex].billingPlanTable[0].billingPeriod;
  obname.actualState = "enhanced on click via function";
  //TODO: Check if User-Object edits term for trial, if user had trial before
}

let testobj = new PiObject("export");
let testobj_filled = new PiObject("export");
fillPiObject(testobj_filled);

let listenerObject = new PiObject("listenexport");

window.addEventListener("DOMContentLoaded", listenerObject.init());

listenerObject;
