tp = window.tp || [];
tp.pianoId.loadExtendedUser({
  extendedUserLoaded: function (data) {
    var fullData = { data };
    for (var i in data.custom_field_values) {
      var fieldName = data.custom_field_values[i].field_name;
      var fieldValue = data.custom_field_values[i].value;
      console.log("Field " + fieldName + " has value " + fieldValue);
    }

    var customData = data.custom_field_values;
    console.log(customData);
    let nickName = customData.find((dates) => dates.field_name === "nickname");

    tp.push(["setCustomVariable", "e2_nick", nickName]);
  },
  formName: "xDev_testform_1",
});

let dataObject = {
  data: {
    email: "test_forms_1@ebabel.de",
    uid: "2014553",
    aid: "zehwzZh5I7",
    updated: 1701684150,
    linked_social_accounts: [],
    password_available: false,
    custom_field_values: [
      {
        field_name: "birthday",
        value: "2000-01-02",
        created: 1701687387,
        email_creator: "userInfoByPublisherchristian.schmuecker@funkemedien.de",
        sort_order: 2,
        field_definition_id: 14527,
        identity_id: null,
      },
      {
        field_name: "nps",
        value: "3",
        created: 1701697359,
        email_creator: "userInfo",
        sort_order: 4,
        field_definition_id: 14529,
        identity_id: null,
      },
      {
        field_name: "ad_optin",
        value: "false",
        created: 1701684171,
        email_creator: "userInfo",
        sort_order: 3,
        field_definition_id: 14528,
        identity_id: null,
      },
      {
        field_name: "nickname",
        value: "Johannes",
        created: 1701700350,
        email_creator: null,
        sort_order: 0,
        field_definition_id: 14538,
        identity_id: null,
      },
      {
        field_name: "churn_reason",
        value: '["Zu billig"]',
        created: 1701684171,
        email_creator: "userInfo",
        sort_order: 1,
        field_definition_id: 13869,
        identity_id: null,
      },
    ],
    has_all_custom_field_values_filled: true,
    need_resend_confirmation_email: false,
    changed_email: false,
    passwordless: true,
  },
};
