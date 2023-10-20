package cn.tuyucheng.taketoday.jaxws.server.topdown;

import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceException;
import javax.xml.ws.WebServiceFeature;
import java.net.MalformedURLException;
import java.net.URL;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.4-b01
 * Generated source version: 2.2
 */
@WebServiceClient(name = "EmployeeServiceTopDown", targetNamespace = "http://topdown.server.jaxws.tuyucheng.com/", wsdlLocation = "file:/Users/do-enr-lap-4/Developer/tuyucheng/source/tutorials/jee7/src/main/java/com/tuyucheng/jaxws/server/topdown/wsdl/employeeservicetopdown.wsdl")
public class EmployeeServiceTopDown_Service
      extends Service {

   private final static URL EMPLOYEESERVICETOPDOWN_WSDL_LOCATION;
   private final static WebServiceException EMPLOYEESERVICETOPDOWN_EXCEPTION;
   private final static QName EMPLOYEESERVICETOPDOWN_QNAME = new QName("http://topdown.server.jaxws.tuyucheng.com/", "EmployeeServiceTopDown");

   static {
      URL url = null;
      WebServiceException e = null;
      try {
         url = new URL("file:/Users/do-enr-lap-4/Developer/tuyucheng/source/tutorials/jee7/src/main/java/com/tuyucheng/jaxws/server/topdown/wsdl/employeeservicetopdown.wsdl");
      } catch (MalformedURLException ex) {
         e = new WebServiceException(ex);
      }
      EMPLOYEESERVICETOPDOWN_WSDL_LOCATION = url;
      EMPLOYEESERVICETOPDOWN_EXCEPTION = e;
   }

   public EmployeeServiceTopDown_Service() {
      super(__getWsdlLocation(), EMPLOYEESERVICETOPDOWN_QNAME);
   }

   public EmployeeServiceTopDown_Service(WebServiceFeature... features) {
      super(__getWsdlLocation(), EMPLOYEESERVICETOPDOWN_QNAME, features);
   }

   public EmployeeServiceTopDown_Service(URL wsdlLocation) {
      super(wsdlLocation, EMPLOYEESERVICETOPDOWN_QNAME);
   }

   public EmployeeServiceTopDown_Service(URL wsdlLocation, WebServiceFeature... features) {
      super(wsdlLocation, EMPLOYEESERVICETOPDOWN_QNAME, features);
   }

   public EmployeeServiceTopDown_Service(URL wsdlLocation, QName serviceName) {
      super(wsdlLocation, serviceName);
   }

   public EmployeeServiceTopDown_Service(URL wsdlLocation, QName serviceName, WebServiceFeature... features) {
      super(wsdlLocation, serviceName, features);
   }

   private static URL __getWsdlLocation() {
      if (EMPLOYEESERVICETOPDOWN_EXCEPTION != null) {
         throw EMPLOYEESERVICETOPDOWN_EXCEPTION;
      }
      return EMPLOYEESERVICETOPDOWN_WSDL_LOCATION;
   }

   /**
    * @return returns EmployeeServiceTopDown
    */
   @WebEndpoint(name = "EmployeeServiceTopDownSOAP")
   public EmployeeServiceTopDown getEmployeeServiceTopDownSOAP() {
      return super.getPort(new QName("http://topdown.server.jaxws.tuyucheng.com/", "EmployeeServiceTopDownSOAP"), EmployeeServiceTopDown.class);
   }

   /**
    * @param features A list of {@link WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
    * @return returns EmployeeServiceTopDown
    */
   @WebEndpoint(name = "EmployeeServiceTopDownSOAP")
   public EmployeeServiceTopDown getEmployeeServiceTopDownSOAP(WebServiceFeature... features) {
      return super.getPort(new QName("http://topdown.server.jaxws.tuyucheng.com/", "EmployeeServiceTopDownSOAP"), EmployeeServiceTopDown.class, features);
   }

}
