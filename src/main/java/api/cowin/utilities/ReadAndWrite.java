package api.cowin.utilities;

import java.io.FileInputStream;
	import java.util.HashMap;
	import java.util.Map.Entry;
	import java.util.Properties;

	public class ReadAndWrite {
		public static FileInputStream fs;
		public static Properties props;
		public static String readConfigData(String key, String fileName) throws Exception {
			fs = new FileInputStream(System.getProperty("user.dir") + "//src//Config//" + fileName + ".properties");
			Properties CONFIG = new Properties();
			CONFIG.load(fs);
			String value = CONFIG.getProperty(key).trim();
			return value;
		} 	
		
		
		public static  HashMap<String, String> getPropertyAsHashMap(String filename) throws Exception{
			loadProperty(filename);
			HashMap<String, String> map = new HashMap<String, String>();
			for (Entry<Object, Object> entry : props.entrySet()){
				map.put((String) entry.getKey(), (String) entry.getValue());
			}
			return map;
			}


public static String getReportConfigPath(){
	Properties CONFIG1 = new Properties();
 String reportConfigPath = CONFIG1.getProperty("reportConfigPath");
 if(reportConfigPath!= null) return reportConfigPath;
 else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath"); 
}
		public static void loadProperty(String fileName) throws Exception {
			fs = new FileInputStream(System.getProperty("user.dir") + "//src//Config//" + fileName + ".properties");
			props = new Properties();
			props.load(fs);
		} 
	}



