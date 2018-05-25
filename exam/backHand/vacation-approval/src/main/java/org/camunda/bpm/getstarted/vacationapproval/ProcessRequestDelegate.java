package org.camunda.bpm.getstarted.vacationapproval;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

import java.util.Random;
import java.util.logging.Logger;

public class ProcessRequestDelegate implements JavaDelegate {

  private final static Logger LOGGER = Logger.getLogger("Vacation-REQUESTS");
  
  public void execute(DelegateExecution execution) throws Exception {
		Random rando = new Random(); 
		execution.setVariable("vacationApproved", !rando.nextBoolean());
		
		LOGGER.info("\n-----------------------------------------------");
		LOGGER.info("\nRajat Testing '" + 
					"\nCustomerName : " + execution.getVariable("customerName") + "'..." + 
					"\nDay : " + execution.getVariable("day") + "'..." + 
						"\nCondition : "+ !rando.nextBoolean());
		LOGGER.info("\n-----------------------------------------------\n");
  }
}