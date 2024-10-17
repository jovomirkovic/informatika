package com.informatika.kartaRasta;

import android.content.Context;
import android.content.res.Configuration;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void attachBaseContext(Context newBase) {

    final Configuration override = new Configuration(newBase.getResources().getConfiguration());
    override.fontScale = 1.0f;
    applyOverrideConfiguration(override);

    super.attachBaseContext(newBase);
  }

// mislim da je to to
  //jad da vidimo
}
