/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.common.CombinedPrincipal', null, global);
goog.exportSymbol('proto.common.MSPIdentityAnonymity', null, global);
goog.exportSymbol('proto.common.MSPIdentityAnonymity.MSPIdentityAnonymityType', null, global);
goog.exportSymbol('proto.common.MSPPrincipal', null, global);
goog.exportSymbol('proto.common.MSPPrincipal.Classification', null, global);
goog.exportSymbol('proto.common.MSPRole', null, global);
goog.exportSymbol('proto.common.MSPRole.MSPRoleType', null, global);
goog.exportSymbol('proto.common.OrganizationUnit', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.MSPPrincipal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.MSPPrincipal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.MSPPrincipal.displayName = 'proto.common.MSPPrincipal';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.MSPPrincipal.prototype.toObject = function(opt_includeInstance) {
  return proto.common.MSPPrincipal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.MSPPrincipal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MSPPrincipal.toObject = function(includeInstance, msg) {
  var f, obj = {
    principalClassification: jspb.Message.getFieldWithDefault(msg, 1, 0),
    principal: msg.getPrincipal_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.MSPPrincipal}
 */
proto.common.MSPPrincipal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.MSPPrincipal;
  return proto.common.MSPPrincipal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.MSPPrincipal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.MSPPrincipal}
 */
proto.common.MSPPrincipal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.common.MSPPrincipal.Classification} */ (reader.readEnum());
      msg.setPrincipalClassification(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrincipal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.MSPPrincipal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.MSPPrincipal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.MSPPrincipal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MSPPrincipal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrincipalClassification();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPrincipal_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.common.MSPPrincipal.Classification = {
  ROLE: 0,
  ORGANIZATION_UNIT: 1,
  IDENTITY: 2,
  ANONYMITY: 3,
  COMBINED: 4
};

/**
 * optional Classification principal_classification = 1;
 * @return {!proto.common.MSPPrincipal.Classification}
 */
proto.common.MSPPrincipal.prototype.getPrincipalClassification = function() {
  return /** @type {!proto.common.MSPPrincipal.Classification} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.common.MSPPrincipal.Classification} value */
proto.common.MSPPrincipal.prototype.setPrincipalClassification = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes principal = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.MSPPrincipal.prototype.getPrincipal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes principal = 2;
 * This is a type-conversion wrapper around `getPrincipal()`
 * @return {string}
 */
proto.common.MSPPrincipal.prototype.getPrincipal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrincipal()));
};


/**
 * optional bytes principal = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrincipal()`
 * @return {!Uint8Array}
 */
proto.common.MSPPrincipal.prototype.getPrincipal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrincipal()));
};


/** @param {!(string|Uint8Array)} value */
proto.common.MSPPrincipal.prototype.setPrincipal = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.OrganizationUnit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.OrganizationUnit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.OrganizationUnit.displayName = 'proto.common.OrganizationUnit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.OrganizationUnit.prototype.toObject = function(opt_includeInstance) {
  return proto.common.OrganizationUnit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.OrganizationUnit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.OrganizationUnit.toObject = function(includeInstance, msg) {
  var f, obj = {
    mspIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationalUnitIdentifier: jspb.Message.getFieldWithDefault(msg, 2, ""),
    certifiersIdentifier: msg.getCertifiersIdentifier_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.OrganizationUnit}
 */
proto.common.OrganizationUnit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.OrganizationUnit;
  return proto.common.OrganizationUnit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.OrganizationUnit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.OrganizationUnit}
 */
proto.common.OrganizationUnit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMspIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationalUnitIdentifier(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCertifiersIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.OrganizationUnit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.OrganizationUnit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.OrganizationUnit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.OrganizationUnit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMspIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganizationalUnitIdentifier();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCertifiersIdentifier_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string msp_identifier = 1;
 * @return {string}
 */
proto.common.OrganizationUnit.prototype.getMspIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.common.OrganizationUnit.prototype.setMspIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organizational_unit_identifier = 2;
 * @return {string}
 */
proto.common.OrganizationUnit.prototype.getOrganizationalUnitIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.common.OrganizationUnit.prototype.setOrganizationalUnitIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes certifiers_identifier = 3;
 * @return {!(string|Uint8Array)}
 */
proto.common.OrganizationUnit.prototype.getCertifiersIdentifier = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes certifiers_identifier = 3;
 * This is a type-conversion wrapper around `getCertifiersIdentifier()`
 * @return {string}
 */
proto.common.OrganizationUnit.prototype.getCertifiersIdentifier_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCertifiersIdentifier()));
};


/**
 * optional bytes certifiers_identifier = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCertifiersIdentifier()`
 * @return {!Uint8Array}
 */
proto.common.OrganizationUnit.prototype.getCertifiersIdentifier_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCertifiersIdentifier()));
};


/** @param {!(string|Uint8Array)} value */
proto.common.OrganizationUnit.prototype.setCertifiersIdentifier = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.MSPRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.MSPRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.MSPRole.displayName = 'proto.common.MSPRole';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.MSPRole.prototype.toObject = function(opt_includeInstance) {
  return proto.common.MSPRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.MSPRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MSPRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    mspIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    role: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.MSPRole}
 */
proto.common.MSPRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.MSPRole;
  return proto.common.MSPRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.MSPRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.MSPRole}
 */
proto.common.MSPRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMspIdentifier(value);
      break;
    case 2:
      var value = /** @type {!proto.common.MSPRole.MSPRoleType} */ (reader.readEnum());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.MSPRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.MSPRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.MSPRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MSPRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMspIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.common.MSPRole.MSPRoleType = {
  MEMBER: 0,
  ADMIN: 1,
  CLIENT: 2,
  PEER: 3
};

/**
 * optional string msp_identifier = 1;
 * @return {string}
 */
proto.common.MSPRole.prototype.getMspIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.common.MSPRole.prototype.setMspIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MSPRoleType role = 2;
 * @return {!proto.common.MSPRole.MSPRoleType}
 */
proto.common.MSPRole.prototype.getRole = function() {
  return /** @type {!proto.common.MSPRole.MSPRoleType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.common.MSPRole.MSPRoleType} value */
proto.common.MSPRole.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.MSPIdentityAnonymity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.MSPIdentityAnonymity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.MSPIdentityAnonymity.displayName = 'proto.common.MSPIdentityAnonymity';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.MSPIdentityAnonymity.prototype.toObject = function(opt_includeInstance) {
  return proto.common.MSPIdentityAnonymity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.MSPIdentityAnonymity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MSPIdentityAnonymity.toObject = function(includeInstance, msg) {
  var f, obj = {
    anonymityType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.MSPIdentityAnonymity}
 */
proto.common.MSPIdentityAnonymity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.MSPIdentityAnonymity;
  return proto.common.MSPIdentityAnonymity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.MSPIdentityAnonymity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.MSPIdentityAnonymity}
 */
proto.common.MSPIdentityAnonymity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.common.MSPIdentityAnonymity.MSPIdentityAnonymityType} */ (reader.readEnum());
      msg.setAnonymityType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.MSPIdentityAnonymity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.MSPIdentityAnonymity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.MSPIdentityAnonymity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.MSPIdentityAnonymity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnonymityType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.common.MSPIdentityAnonymity.MSPIdentityAnonymityType = {
  NOMINAL: 0,
  ANONYMOUS: 1
};

/**
 * optional MSPIdentityAnonymityType anonymity_type = 1;
 * @return {!proto.common.MSPIdentityAnonymity.MSPIdentityAnonymityType}
 */
proto.common.MSPIdentityAnonymity.prototype.getAnonymityType = function() {
  return /** @type {!proto.common.MSPIdentityAnonymity.MSPIdentityAnonymityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.common.MSPIdentityAnonymity.MSPIdentityAnonymityType} value */
proto.common.MSPIdentityAnonymity.prototype.setAnonymityType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.common.CombinedPrincipal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.CombinedPrincipal.repeatedFields_, null);
};
goog.inherits(proto.common.CombinedPrincipal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.CombinedPrincipal.displayName = 'proto.common.CombinedPrincipal';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.CombinedPrincipal.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.CombinedPrincipal.prototype.toObject = function(opt_includeInstance) {
  return proto.common.CombinedPrincipal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.CombinedPrincipal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.CombinedPrincipal.toObject = function(includeInstance, msg) {
  var f, obj = {
    principalsList: jspb.Message.toObjectList(msg.getPrincipalsList(),
    proto.common.MSPPrincipal.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.common.CombinedPrincipal}
 */
proto.common.CombinedPrincipal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.CombinedPrincipal;
  return proto.common.CombinedPrincipal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.CombinedPrincipal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.CombinedPrincipal}
 */
proto.common.CombinedPrincipal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.common.MSPPrincipal;
      reader.readMessage(value,proto.common.MSPPrincipal.deserializeBinaryFromReader);
      msg.addPrincipals(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.CombinedPrincipal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.CombinedPrincipal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.CombinedPrincipal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.CombinedPrincipal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrincipalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.common.MSPPrincipal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MSPPrincipal principals = 1;
 * @return {!Array<!proto.common.MSPPrincipal>}
 */
proto.common.CombinedPrincipal.prototype.getPrincipalsList = function() {
  return /** @type{!Array<!proto.common.MSPPrincipal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.common.MSPPrincipal, 1));
};


/** @param {!Array<!proto.common.MSPPrincipal>} value */
proto.common.CombinedPrincipal.prototype.setPrincipalsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.common.MSPPrincipal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.common.MSPPrincipal}
 */
proto.common.CombinedPrincipal.prototype.addPrincipals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.common.MSPPrincipal, opt_index);
};


proto.common.CombinedPrincipal.prototype.clearPrincipalsList = function() {
  this.setPrincipalsList([]);
};


goog.object.extend(exports, proto.common);
