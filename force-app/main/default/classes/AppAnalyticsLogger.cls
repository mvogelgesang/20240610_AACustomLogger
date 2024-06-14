public with sharing class AppAnalyticsLogger {
  public enum AA_ENUMS {
    EXAMPLELWC_START,
    EXAMPLELWC_END,
    EXAMPLELWC_CLICK,
    SECONDLWC_START,
    SECONDLWC_END,
    THIRDLWC_START,
    THIRDLWC_END,
    FOURTHLWC_START,
    FOURTHLWC_END,
    BUSINESSLOGIC_BLUE,
    BUSINESSLOGIC_GREEN,
    BUSINESSLOGIC_RED,
    BUSINESSLOGIC_YELLOW,
    BUSINESSLOGIC_OTHER
  }

  @AuraEnabled
  public static void log(String componentName, String type) {
    try {
      IsvPartners.AppAnalytics.logCustomInteraction(
        getInteractionLabel(componentName, type)
      );
      System.debug(
        'AppAnalyticsLogger: ' +
        componentName +
          ' with a type of ' +
          type +
          ' successfully logged'
      );
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  private static AA_ENUMS getInteractionLabel(String componentName, String type) {
    string name = componentName.toUpperCase() + '_' + type.toUpperCase();
    AA_ENUMS enumVal;
    try {
        enumVal = AA_ENUMS.valueOf(name);
    } catch (Exception e) {
        System.debug('Invalid interaction label provided ' + componentName +', ' + type);
        return enumVal;
    }
    return enumVal;
  }
}
