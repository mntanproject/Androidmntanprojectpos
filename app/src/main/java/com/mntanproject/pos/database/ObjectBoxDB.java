package com.mntanproject.pos.database;

import android.content.Context;

import com.mntanproject.pos.MyObjectBox;

import io.objectbox.BoxStore;
import io.objectbox.android.AndroidObjectBrowser;

public class ObjectBoxDB {

    private static BoxStore boxStore;

    public static void init(Context context){

        boxStore = MyObjectBox.builder()
                .androidContext(context.getApplicationContext())
                .build();
        boolean started;
        started = new AndroidObjectBrowser(boxStore).start(context.getApplicationContext());
       // boxStore = MyObjectBox.builder().androidContext(this).build();

//        if (BuildConfig.DEBUG) {
//            System.out.println("Running debug...........");
//            boolean started;
//            started = new AndroidObjectBrowser(boxStore).start(context.getApplicationContext());
//            Log.i("ObjectBrowser", "Started: " + started);
//        }else {
//            System.out.println("Running not debug..........." + BuildConfig.BUILD_TYPE);
//
//        }
    }

    public static BoxStore get() {
        return boxStore;
    }
}
