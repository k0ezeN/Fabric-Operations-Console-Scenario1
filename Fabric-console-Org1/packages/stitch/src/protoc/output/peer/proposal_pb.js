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

var peer_chaincode_pb = require('../peer/chaincode_pb.js');
goog.object.extend(proto, peer_chaincode_pb);
var peer_proposal_response_pb = require('../peer/proposal_response_pb.js');
goog.object.extend(proto, peer_proposal_response_pb);
goog.exportSymbol('proto.protos.ChaincodeAction', null, global);
goog.exportSymbol('proto.protos.ChaincodeHeaderExtension', null, global);
goog.exportSymbol('proto.protos.ChaincodeProposalPayload', null, global);
goog.exportSymbol('proto.protos.Proposal', null, global);
goog.exportSymbol('proto.protos.SignedProposal', null, global);

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
proto.protos.SignedProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.SignedProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.SignedProposal.displayName = 'proto.protos.SignedProposal';
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
proto.protos.SignedProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.SignedProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.SignedProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.SignedProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalBytes: msg.getProposalBytes_asB64(),
    signature: msg.getSignature_asB64()
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
 * @return {!proto.protos.SignedProposal}
 */
proto.protos.SignedProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.SignedProposal;
  return proto.protos.SignedProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.SignedProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.SignedProposal}
 */
proto.protos.SignedProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposalBytes(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
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
proto.protos.SignedProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.SignedProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.SignedProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.SignedProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes proposal_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protos.SignedProposal.prototype.getProposalBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes proposal_bytes = 1;
 * This is a type-conversion wrapper around `getProposalBytes()`
 * @return {string}
 */
proto.protos.SignedProposal.prototype.getProposalBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposalBytes()));
};


/**
 * optional bytes proposal_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposalBytes()`
 * @return {!Uint8Array}
 */
proto.protos.SignedProposal.prototype.getProposalBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposalBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.SignedProposal.prototype.setProposalBytes = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protos.SignedProposal.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.protos.SignedProposal.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.protos.SignedProposal.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.SignedProposal.prototype.setSignature = function(value) {
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
proto.protos.Proposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.Proposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.Proposal.displayName = 'proto.protos.Proposal';
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
proto.protos.Proposal.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.Proposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.Proposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.Proposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: msg.getHeader_asB64(),
    payload: msg.getPayload_asB64(),
    fabricExtension: msg.getFabricExtension_asB64()
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
 * @return {!proto.protos.Proposal}
 */
proto.protos.Proposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.Proposal;
  return proto.protos.Proposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.Proposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.Proposal}
 */
proto.protos.Proposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFabricExtension(value);
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
proto.protos.Proposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.Proposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.Proposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.Proposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getFabricExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes header = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protos.Proposal.prototype.getHeader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes header = 1;
 * This is a type-conversion wrapper around `getHeader()`
 * @return {string}
 */
proto.protos.Proposal.prototype.getHeader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHeader()));
};


/**
 * optional bytes header = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHeader()`
 * @return {!Uint8Array}
 */
proto.protos.Proposal.prototype.getHeader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHeader()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.Proposal.prototype.setHeader = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protos.Proposal.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.protos.Proposal.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.protos.Proposal.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.Proposal.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes fabric_extension = 3;
 * @return {!(string|Uint8Array)}
 */
proto.protos.Proposal.prototype.getFabricExtension = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes fabric_extension = 3;
 * This is a type-conversion wrapper around `getFabricExtension()`
 * @return {string}
 */
proto.protos.Proposal.prototype.getFabricExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFabricExtension()));
};


/**
 * optional bytes fabric_extension = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFabricExtension()`
 * @return {!Uint8Array}
 */
proto.protos.Proposal.prototype.getFabricExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFabricExtension()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.Proposal.prototype.setFabricExtension = function(value) {
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
proto.protos.ChaincodeHeaderExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ChaincodeHeaderExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.ChaincodeHeaderExtension.displayName = 'proto.protos.ChaincodeHeaderExtension';
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
proto.protos.ChaincodeHeaderExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ChaincodeHeaderExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ChaincodeHeaderExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ChaincodeHeaderExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadVisibility: msg.getPayloadVisibility_asB64(),
    chaincodeId: (f = msg.getChaincodeId()) && peer_chaincode_pb.ChaincodeID.toObject(includeInstance, f)
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
 * @return {!proto.protos.ChaincodeHeaderExtension}
 */
proto.protos.ChaincodeHeaderExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ChaincodeHeaderExtension;
  return proto.protos.ChaincodeHeaderExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ChaincodeHeaderExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ChaincodeHeaderExtension}
 */
proto.protos.ChaincodeHeaderExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayloadVisibility(value);
      break;
    case 2:
      var value = new peer_chaincode_pb.ChaincodeID;
      reader.readMessage(value,peer_chaincode_pb.ChaincodeID.deserializeBinaryFromReader);
      msg.setChaincodeId(value);
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
proto.protos.ChaincodeHeaderExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ChaincodeHeaderExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ChaincodeHeaderExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ChaincodeHeaderExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayloadVisibility_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getChaincodeId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      peer_chaincode_pb.ChaincodeID.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes payload_visibility = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protos.ChaincodeHeaderExtension.prototype.getPayloadVisibility = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload_visibility = 1;
 * This is a type-conversion wrapper around `getPayloadVisibility()`
 * @return {string}
 */
proto.protos.ChaincodeHeaderExtension.prototype.getPayloadVisibility_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayloadVisibility()));
};


/**
 * optional bytes payload_visibility = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayloadVisibility()`
 * @return {!Uint8Array}
 */
proto.protos.ChaincodeHeaderExtension.prototype.getPayloadVisibility_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayloadVisibility()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.ChaincodeHeaderExtension.prototype.setPayloadVisibility = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional ChaincodeID chaincode_id = 2;
 * @return {?proto.protos.ChaincodeID}
 */
proto.protos.ChaincodeHeaderExtension.prototype.getChaincodeId = function() {
  return /** @type{?proto.protos.ChaincodeID} */ (
    jspb.Message.getWrapperField(this, peer_chaincode_pb.ChaincodeID, 2));
};


/** @param {?proto.protos.ChaincodeID|undefined} value */
proto.protos.ChaincodeHeaderExtension.prototype.setChaincodeId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protos.ChaincodeHeaderExtension.prototype.clearChaincodeId = function() {
  this.setChaincodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ChaincodeHeaderExtension.prototype.hasChaincodeId = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.protos.ChaincodeProposalPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ChaincodeProposalPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.ChaincodeProposalPayload.displayName = 'proto.protos.ChaincodeProposalPayload';
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
proto.protos.ChaincodeProposalPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ChaincodeProposalPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ChaincodeProposalPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ChaincodeProposalPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: msg.getInput_asB64(),
    transientmapMap: (f = msg.getTransientmapMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.protos.ChaincodeProposalPayload}
 */
proto.protos.ChaincodeProposalPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ChaincodeProposalPayload;
  return proto.protos.ChaincodeProposalPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ChaincodeProposalPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ChaincodeProposalPayload}
 */
proto.protos.ChaincodeProposalPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInput(value);
      break;
    case 2:
      var value = msg.getTransientmapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
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
proto.protos.ChaincodeProposalPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ChaincodeProposalPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ChaincodeProposalPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ChaincodeProposalPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTransientmapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional bytes input = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protos.ChaincodeProposalPayload.prototype.getInput = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes input = 1;
 * This is a type-conversion wrapper around `getInput()`
 * @return {string}
 */
proto.protos.ChaincodeProposalPayload.prototype.getInput_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInput()));
};


/**
 * optional bytes input = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInput()`
 * @return {!Uint8Array}
 */
proto.protos.ChaincodeProposalPayload.prototype.getInput_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInput()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.ChaincodeProposalPayload.prototype.setInput = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * map<string, bytes> TransientMap = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.protos.ChaincodeProposalPayload.prototype.getTransientmapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


proto.protos.ChaincodeProposalPayload.prototype.clearTransientmapMap = function() {
  this.getTransientmapMap().clear();
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
proto.protos.ChaincodeAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ChaincodeAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.ChaincodeAction.displayName = 'proto.protos.ChaincodeAction';
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
proto.protos.ChaincodeAction.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ChaincodeAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ChaincodeAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ChaincodeAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    results: msg.getResults_asB64(),
    events: msg.getEvents_asB64(),
    response: (f = msg.getResponse()) && peer_proposal_response_pb.Response.toObject(includeInstance, f),
    chaincodeId: (f = msg.getChaincodeId()) && peer_chaincode_pb.ChaincodeID.toObject(includeInstance, f)
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
 * @return {!proto.protos.ChaincodeAction}
 */
proto.protos.ChaincodeAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ChaincodeAction;
  return proto.protos.ChaincodeAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ChaincodeAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ChaincodeAction}
 */
proto.protos.ChaincodeAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResults(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEvents(value);
      break;
    case 3:
      var value = new peer_proposal_response_pb.Response;
      reader.readMessage(value,peer_proposal_response_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 4:
      var value = new peer_chaincode_pb.ChaincodeID;
      reader.readMessage(value,peer_chaincode_pb.ChaincodeID.deserializeBinaryFromReader);
      msg.setChaincodeId(value);
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
proto.protos.ChaincodeAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ChaincodeAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ChaincodeAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ChaincodeAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResults_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getEvents_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      peer_proposal_response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getChaincodeId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      peer_chaincode_pb.ChaincodeID.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes results = 1;
 * @return {!(string|Uint8Array)}
 */
proto.protos.ChaincodeAction.prototype.getResults = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes results = 1;
 * This is a type-conversion wrapper around `getResults()`
 * @return {string}
 */
proto.protos.ChaincodeAction.prototype.getResults_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResults()));
};


/**
 * optional bytes results = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResults()`
 * @return {!Uint8Array}
 */
proto.protos.ChaincodeAction.prototype.getResults_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResults()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.ChaincodeAction.prototype.setResults = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes events = 2;
 * @return {!(string|Uint8Array)}
 */
proto.protos.ChaincodeAction.prototype.getEvents = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes events = 2;
 * This is a type-conversion wrapper around `getEvents()`
 * @return {string}
 */
proto.protos.ChaincodeAction.prototype.getEvents_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEvents()));
};


/**
 * optional bytes events = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEvents()`
 * @return {!Uint8Array}
 */
proto.protos.ChaincodeAction.prototype.getEvents_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEvents()));
};


/** @param {!(string|Uint8Array)} value */
proto.protos.ChaincodeAction.prototype.setEvents = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Response response = 3;
 * @return {?proto.protos.Response}
 */
proto.protos.ChaincodeAction.prototype.getResponse = function() {
  return /** @type{?proto.protos.Response} */ (
    jspb.Message.getWrapperField(this, peer_proposal_response_pb.Response, 3));
};


/** @param {?proto.protos.Response|undefined} value */
proto.protos.ChaincodeAction.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.protos.ChaincodeAction.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ChaincodeAction.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ChaincodeID chaincode_id = 4;
 * @return {?proto.protos.ChaincodeID}
 */
proto.protos.ChaincodeAction.prototype.getChaincodeId = function() {
  return /** @type{?proto.protos.ChaincodeID} */ (
    jspb.Message.getWrapperField(this, peer_chaincode_pb.ChaincodeID, 4));
};


/** @param {?proto.protos.ChaincodeID|undefined} value */
proto.protos.ChaincodeAction.prototype.setChaincodeId = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.protos.ChaincodeAction.prototype.clearChaincodeId = function() {
  this.setChaincodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protos.ChaincodeAction.prototype.hasChaincodeId = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.protos);
