package com.ltc;

import java.util.UUID;

import com.mars.cxxph.AppActivity;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.provider.Settings.Secure;
import android.telephony.TelephonyManager;
import android.util.Log;

public class tool {
	private static String TAG = "tool";
	
	
	/**   
	* 获取xml的versionName
	* @return String versionName
	*/    
	public static String getAppVersionName() {
		Context context = AppActivity.instance;
	    String versionName = "";    
	    try {    
	        // ---get the package info---    
	        PackageManager pm = context.getPackageManager();    
	        PackageInfo pi = pm.getPackageInfo(context.getPackageName(), 0);    
	        versionName = pi.versionName;    
	        if (versionName == null || versionName.length() <= 0) {    
	            return "";    
	        }    
	    } catch (Exception e) {    
	        Log.e("VersionInfo", "Exception", e);    
	    }    
	    return versionName;    
	}   
	
	
	/**
	 * 获取meta-data标签的值
	 * @param String metaName
	 * @return String metaValue
	 */
	public static String getMetaData(String metaName){
		Context context = AppActivity.instance;
		Bundle metaData = null;
   	 	String  metaValue = "0";
   	 	
   	 	if (context == null) {
 			return "0";
 		}
   	 	
   	 	try {
   	 		ApplicationInfo ai = context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.GET_META_DATA);
   	 		if (null != ai) {
   	 			metaData = ai.metaData;
  	 		}
   	 		if (null != metaData) {
   	 			metaValue = metaData.getString(metaName);
   	 			System.out.println(TAG + "*********" + metaName + "************" + metaValue);
   	 		}
   	 	} catch (NameNotFoundException e) {
			return "0";
		} 
   	 	
   	 	return metaValue;
	}
	/** 
     * 检测当的网络（WLAN、3G/2G）状态 
     * @param context Context 
     * @return true 表示网络可用    
     */  
    public static boolean isNetworkAvailable(Context context) {  
        ConnectivityManager connectivity = (ConnectivityManager) context  
                .getSystemService(Context.CONNECTIVITY_SERVICE);  
        if (connectivity != null) {  
            NetworkInfo info = connectivity.getActiveNetworkInfo();  
            if (info != null && info.isConnected())   
            {  
                // 当前网络是连接的  
                if (info.getState() == NetworkInfo.State.CONNECTED)   
                {  
                    // 当前所连接的网络可用  
                    return true;  
                }  
            }  
        }  
        return false;  
    }  
     
    /***
     * 获取设备号
     * @return 
     */
	public static String getIMEI(){
		String ret = "undefined!";
		try{
			Context context = AppActivity.getContext();
			String imei = ((TelephonyManager)context.getSystemService(Context.TELEPHONY_SERVICE)).getDeviceId(); 
			if (imei != null){
				ret = imei;
			} else {
				String android_id = Secure.getString(context.getContentResolver(), Secure.ANDROID_ID);
				if (android_id != null) {
					ret = android_id;
				}
			}
		}catch (Exception e) {
			System.out.println("there is something wrong to get IMEI !!!");
		}
		return ret;
	}
	
	private static String uniqueID = "undefined!";
	private static final String PREF_UNIQUE_ID = "PREF_UNIQUE_ID";
	public static String getUniqueID(){
		Context context = AppActivity.getContext(); 
		SharedPreferences sharedPrefs = context.getSharedPreferences(PREF_UNIQUE_ID, Context.MODE_PRIVATE);
		uniqueID = sharedPrefs.getString(PREF_UNIQUE_ID, null);
		
		uniqueID = UUID.randomUUID().toString();
		Editor editor = sharedPrefs.edit();
		editor.putString(PREF_UNIQUE_ID, uniqueID);
		editor.commit();
	
		return uniqueID;
	}
	
	// 获取imsi码
	public static String getImsi(Context context) {
		TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
		String _imsi = tm.getSubscriberId();
		if(_imsi != null && !_imsi.equals("")){
			return _imsi;
		}
		return "未知";
	}
	
	public static String getOpenid(){
		String id = getIMEI();
		if (id != "undefined!"){
			return id;
		}
		id = getUniqueID();	
		Log.e("openid", "xxxxxxxxxxxxxxxxxxxxxxxxx id : " + id);
		return id;	
	}
	
	public static String exit(String args) {
		return sdkUtil.exit(args);
	}
}