import Analytics from 'analytics'
import mixpanelPlugin from '@analytics/mixpanel'
import amplitudePlugin from '@analytics/amplitude'

const analytics = Analytics({
    app: 'example-app',
    version: 1.0,
    plugins: [
        mixpanelPlugin({ token: 'ec3e18e109fc46c07a4f0db7aa457d9b' }),
        amplitudePlugin({ apiKey: '915b4db61dfc9fd78f2f09d701f8db5e' })
    ]
})

console.log('env variable:', process.env.REACT_APP_MIXPANEL_TOKEN)
console.log(process.env)

window.Analytics = analytics;
export default analytics