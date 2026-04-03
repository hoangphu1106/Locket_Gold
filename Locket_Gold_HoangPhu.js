/**
 * @name Locket Gold - HoangPhu
 * @author HoangPhu
 * @description unlock: Full.
 */

const PURCHASE_DATE = "2026-01-01T00:00:00Z";
const EXPIRE_DATE = "2099-12-31T23:59:59Z";

let body = $response.body;
if (!body) $done({});

try {
    let obj = JSON.parse(body);

    const premiumStatus = {
        "is_pro": true,
        "is_gold": true,
        "product_id": "com.locket.gold.yearly",
        "status": "active",
        "expires_at": EXPIRE_DATE,
        "purchase_date": PURCHASE_DATE,
        "type": "gold"
    };

    if (obj.data) {
      
        obj.data.is_gold = true;
        obj.data.premium_status = premiumStatus;
        obj.data.subscription = premiumStatus;

    
        obj.data.capabilities = {
            "can_use_gold_features": true,
            "can_upload_from_camera_roll": true, 
            "can_post_long_videos": true,        
            "max_video_duration": 15,           
            "can_see_viewers": true,             
            "no_ads": true,                      
            "high_quality_uploads": true,       
            "can_customize_app_icon": true,     
            "can_use_exclusive_emojis": true,   
            "can_change_themes": true,           
            "early_access": true,
            "max_friends": 999
        };
        
        obj.data.custom_status = "HoangPhu Gold Active";
    }

    if (obj.subscriptions) obj.subscriptions = [premiumStatus];
    
  
    obj.verified_by = "HoangPhu_System";
    
    $done({ 
        body: JSON.stringify(obj),
        headers: {
            "Cache-Control": "max-age=31536000, public",
            "X-Authorized-By": "HoangPhu"
        }
    });
} catch (e) {
    $done({});
}
