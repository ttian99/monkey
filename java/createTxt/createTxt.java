
public static void createTxt(){
    	//获取SD卡的路径
    	String pathString = Environment.getExternalStorageDirectory().getPath();
    	File file = new File(pathString+"/"+"xxx.txt");
    	//判断文件是否存在
    	file.exists();
    	//创建心文件
    	file.createNewFile();

    	//#写数据到文件heqingde.txt
    	//创建一个文件输出流
    	FileOutputStream out = new FileOutputStream(file,true);//true表示在文件末尾添加
    	String msg = new String("xxx\n");				
    	out.write(msg.getBytes("UTF-8"));
    	out.close();

    	//#从文件heqingde.txt中读出数据
    	//在内存中开辟一段缓冲区
    	byte Buffer[] = new byte[1024];
    	//得到文件输入流
    	FileInputStream in = new FileInputStream(file);
    	//读出来的数据首先放入缓冲区，满了之后再写到字符输出流中
    	int len = in.read(Buffer);
    	//创建一个字节数组输出流
    	ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    	outputStream.write(Buffer,0,len);
    	//把字节输出流转String
    	new String(outputStream.toByteArray()));
    }