package ccit.qrs101;

import java.util.Timer;
import java.util.TimerTask;



import android.os.Handler;
import android.os.Message;
public class testA {
    Timer mTimer=new Timer();
    TimerTask task=new TimerTask(){

        @Override
        public void run() {
            // TODO Auto-generated method stub
              Message message = new Message();
                
              handler.sendMessage(message);
             
        }
        
    };
    Handler handler=new Handler(){

        @Override
        public void handleMessage(Message msg) {
            // TODO Auto-generated method stub
            if(mOnTestListening!=null){
                mOnTestListening.TestListening(0);
            }
            
            super.handleMessage(msg);
        }
        
    };
    public void run(){
        mTimer.schedule(task, 5000,5000);//每五秒执行一次handler
    }
    public interface OnTestListening{
        void TestListening(int i);
    }
    
    OnTestListening mOnTestListening=null;
    public void setOnTestListening(OnTestListening e){
        mOnTestListening=e;
    }
}