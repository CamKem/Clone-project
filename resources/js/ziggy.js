const Ziggy = {
    "url":"http:\/\/127.0.0.1:8000",
    "port":8000,"defaults":{},
    "routes":{"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},
    "ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},
    "ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},
    "dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},
    "communities.index":{"uri":"communities","methods":["GET","HEAD"]},
    "communities.create":{"uri":"communities\/create","methods":["GET","HEAD"]},
    "communities.store":{"uri":"communities","methods":["POST"]},
    "communities.show":{"uri":"communities\/{community}","methods":["GET","HEAD"]},
    "communities.edit":{"uri":"communities\/{community}\/edit","methods":["GET","HEAD"]},
    "communities.update":{"uri":"communities\/{community}","methods":["PUT","PATCH"]},
    "communities.destroy":{"uri":"communities\/{community}","methods":["DELETE"]},
    "register":{"uri":"register","methods":["GET","HEAD"]},
    "login":{"uri":"login","methods":["GET","HEAD"]},
    "password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},
    "password.email":{"uri":"forgot-password","methods":["POST"]},
    "password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},
    "password.update":{"uri":"reset-password","methods":["POST"]},
    "verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},
    "verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},
    "verification.send":{"uri":"email\/verification-notification","methods":["POST"]},
    "password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},
    "logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
