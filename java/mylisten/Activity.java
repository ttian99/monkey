package ccit.qrs101;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class TestActivity extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        testA mtestA=new testA();
        mtestA.run();
        mtestA.setOnTestListening(new testA.OnTestListening() {
            
            @Override
            public void TestListening(int i) {
                // TODO Auto-generated method stub
                //Toast.makeText(TestActivity.this, "监听成功！！！", 1000).show();   
                new AlertDialog.Builder(TestActivity.this)
                .setTitle("信息提示")
                .setMessage("监听成功！！！")
                .setPositiveButton("OK", new DialogInterface.OnClickListener() {

                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        // TODO Auto-generated method stub
                        
                    }
                    
                
                })
                .create()
                .show();
            }
        });
    }
}