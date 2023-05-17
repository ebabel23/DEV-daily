<script data-pagespeed-no-defer>
	window.pdl = window.pdl || {};
	let enableConKey = "true";
	let enableConTrue = (enableConKey === "true");


    if (enableConTrue == true) {
        window.pdl.requireConsent = enableConTrue;
		console.log("Piano-Consent-required - 1 - ", "${requireConsent}");
    } else {
        tp.push(['setCustomVariable', '__cm_composer', 'opt-in']);
		console.log("Piano-Consent-required - 1 - ", "${requireConsent}");
    }
</script>