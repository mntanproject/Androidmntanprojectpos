package com.mntanproject.pos;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import com.mntanproject.pos.javascript.WebAppInterface;

import java.util.HashMap;

import mntanproject.core.server.MnServer;

public class MainActivity extends AppCompatActivity {

    public MnServer server;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        server = new MnServer(9000);

        HashMap<String, String> routes = new HashMap<String, String>();

        routes.put("supplier", "com.mntanproject.pos.supplier.SupplierApi");
        routes.put("customer", "com.mntanproject.pos.customer.CustomerApi");

        server.getRegisteredRoute().setRegisteredRoutes(routes);
        server.startServer();
        Toast.makeText(this, "Server already running", Toast.LENGTH_LONG).show();

        if (server.serverRunning) {
            Toast.makeText(this, "Server listening at port 9000", Toast.LENGTH_LONG).show();

        } else {

            Toast.makeText(this, "Unable to start server", Toast.LENGTH_LONG).show();
        }

        WebView myWebView = (WebView) findViewById(R.id.myWebView);
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setUseWideViewPort(true);

        myWebView.setWebChromeClient(new WebChromeClient());
        myWebView.setWebViewClient(new WebViewClient());
        myWebView.loadUrl("file:///android_asset/gui/home.html");
        // http://html5test.com/
        //myWebView.loadUrl("file:///android_asset/gui2/index.html");
        myWebView.setWebContentsDebuggingEnabled(true);
        myWebView.addJavascriptInterface(new WebAppInterface(this), "Android");
        getSupportActionBar().hide();
        System.out.println("user:" + myWebView.getSettings().getUserAgentString());
    }
}