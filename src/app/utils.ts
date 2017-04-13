export default class Utils {
    static calculateTriggerValue(value, opts) {

		const trigger = opts.trigger || false;

		/* Have Trigger */
		if(trigger) {
            const mod = value % trigger;
            if(mod > trigger / 2) {
			    return value - mod + trigger;
            } else {
                return value - mod;
            }
		}
		
        return value
    }
}