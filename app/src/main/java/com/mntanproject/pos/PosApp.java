package com.mntanproject.pos;

import android.app.Application;
import com.mntanproject.pos.database.ObjectBoxDB;

public class PosApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        ObjectBoxDB.init(this);

    }
}
