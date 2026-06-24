export function trackEvent(eventName, locationOnPage, data) {
    let props;

    if (data) {
        if (typeof data === 'string') {
            props = { button_name: data.trim() };
        } else {
            props = data;
        }
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'site_interaction',
        event_name: eventName,
        props: Object.assign({ event_location: locationOnPage }, props)
    });
}
