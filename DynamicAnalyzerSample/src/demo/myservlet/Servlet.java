package demo.myservlet;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import org.apache.tomcat.util.codec.binary.StringUtils;


/**
 * Servlet implementation class Servlet
 */
@WebServlet("/Servlet")
public class Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  
		String sInput = request.getParameter("input");

		//Uncomment to fix the XSS issue
		sInput = Sanitize(sInput);
		  
		response.getWriter().write(sInput);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sInput = request.getParameter("input");
		
		//sInput = Sanitize(sInput);
		  
		response.getWriter().write(sInput);
	}
	
   /**
    * Filter the specified message string for characters that are sensitive
    * in HTML.  This avoids potential attacks caused by including JavaScript
    * codes in the request URL that is often reported in error messages.
    */
   public String Sanitize(String message) 
   {
      if (message == null) return null;
      int len = message.length();
      StringBuffer result = new StringBuffer(len + 20);
      char aChar;
  
      for (int i = 0; i < len; ++i) {
         aChar = message.charAt(i);
         switch (aChar) {
            case '<': result.append("&lt;"); break;
            case '>': result.append("&gt;"); break;
            case '&': result.append("&amp;"); break;
            case '"': result.append("&quot;"); break;
            default:  result.append(aChar);
         }
      }
      return (result.toString());
   }
}
