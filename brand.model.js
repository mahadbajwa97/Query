var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaType = Schema.Types;
var ObjectId = mongoose.Schema.Types.ObjectId;

schemaName = 'Brand';

const Def = {
    "brand_ref"  : { type: String, default: "" },
    "brand_title" : { type: String, default: "" },
    "brand_heading" : { type: String, default: "" },
    "brand_tagline" : { type: String, default: "" },
    "brand_description" : { type: String, default: "" },
    "brand_logo" : { type: String, default: "" },
    "brand_banner" : { type: String, default: "" },
    "brand_url" : { type: String, default: "" },
    "brand_keywords" : { type: String, default: "" },
    "brand_unique_content" : { type: String, default: "" },
    "brand_seo_content" : { type: String, default: "" },
    "total_skus" : { type: Number, required: false },
    
}