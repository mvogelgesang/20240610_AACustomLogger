public with sharing class BusinessLogic {
    public static String choosePath(String input) {
        // create custom interaction logs for each type of input
        String result;
        switch on input {
            when 'BLUE' {
                result = 'You chose blue path';
                AppAnalyticsLogger.log('BusinessLogic', input);
            }
            when 'GREEN' {
                result = 'You chose green path';
                AppAnalyticsLogger.log('BusinessLogic', input);
            }
            when 'RED' {
                result = 'You chose red path';
                AppAnalyticsLogger.log('BusinessLogic', input);
            }
            when 'YELLOW' {
                result = 'You chose yellow path';
                AppAnalyticsLogger.log('BusinessLogic', input);
            }
            when else {
                result = 'You chose other path';
                AppAnalyticsLogger.log('BusinessLogic', 'other');
            }
        }
        return result;
    }
}
  