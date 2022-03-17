package api.cowin.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.sl.usermodel.Sheet;








public class ExcelReader {
public void getExcelcontect() throws IOException
{
	File file=new File("C:\\Users\\DELL\\eclipse-workspace\\cowinapi\\src\\Resources\\amrita1.xlsx");
	
	FileInputStream fis=new FileInputStream(file);
	HSSFWorkbook wb=new HSSFWorkbook(fis);
	HSSFSheet sheet=wb.getSheet("Test");
	int rowcount= sheet.getLastRowNum()-sheet.getFirstRowNum();
	for( int i=0; i>rowcount-1;i++)
	{
		HSSFRow row=sheet.getRow(i);
		String cellvalue=row.getCell(i).getStringCellValue();
		System.out.println(cellvalue);

	}
	
}
}
