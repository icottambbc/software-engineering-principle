public class Driver {

  private String id;
  private String name;
  private Integer licensePoint; 
  private String destination;
  private Integer milesAccumlated;

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }

  
  // Store updates to the driver data to a database
  public void storeToDatabase() {

  }

  // Drive to a new destination
  public void driveToDestination() {

  }

  // Check if a driver has exceeded his daily miles limit
  public void checkIfExceededDailyMiles() {

  }

  // notfiy a driver, for example that he has 12 points and a driving ban
  public void sendNotificationToDriver() {

  }

  // log any changes to the drivers points
  public void logUpdate() {

  }

}