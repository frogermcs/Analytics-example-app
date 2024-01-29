import Analytics from 'analytics'
import mixpanelPlugin from '@analytics/mixpanel'
import amplitudePlugin from '@analytics/amplitude'

const analytics = Analytics({
    app: 'example-app',
    version: 1.0,
    plugins: [
        mixpanelPlugin({ token: process.env.MIXPANEL_TOKEN }),
        amplitudePlugin({ apiKey: process.env.AMPLITUDE_API_KEY })
    ]
})

window.Analytics = analytics;
export default analytics