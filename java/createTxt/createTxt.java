
public static void createTxt(){
    	//��ȡSD����·��
    	String pathString = Environment.getExternalStorageDirectory().getPath();
    	File file = new File(pathString+"/"+"xxx.txt");
    	//�ж��ļ��Ƿ����
    	file.exists();
    	//�������ļ�
    	file.createNewFile();

    	//#д���ݵ��ļ�heqingde.txt
    	//����һ���ļ������
    	FileOutputStream out = new FileOutputStream(file,true);//true��ʾ���ļ�ĩβ���
    	String msg = new String("xxx\n");				
    	out.write(msg.getBytes("UTF-8"));
    	out.close();

    	//#���ļ�heqingde.txt�ж�������
    	//���ڴ��п���һ�λ�����
    	byte Buffer[] = new byte[1024];
    	//�õ��ļ�������
    	FileInputStream in = new FileInputStream(file);
    	//���������������ȷ��뻺����������֮����д���ַ��������
    	int len = in.read(Buffer);
    	//����һ���ֽ����������
    	ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    	outputStream.write(Buffer,0,len);
    	//���ֽ������תString
    	new String(outputStream.toByteArray()));
    }