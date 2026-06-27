if (!global.__SyReg) global.__SyReg = new Map();

const log = {
  info: (m) => console.log(`[CORE][INFO] ${m}`),
  err: (m, e) => console.error(`[CORE][ERR] ${m}`, e || "")
};

// নিজের UID এখানে বসাও
const OWNER_UID = "100091413057011";

module.exports = {
  config: {
    name: "owner_noprefix",
    version: "6.0.0",
    author: "hriday",
    role: 0,
    shortDescription: "UID Admin Core",
    category: "system"
  },

  onStart: async () => {},

  onChat: async function (O) {
    const { event: ev, message: msg } = O;

    if (!ev.body || typeof ev.body !== "string") return;

    const body = ev.body.trim();
    if (!body) return;

    const sender = String(ev.senderID);

    // UID admin verify
    if (sender === OWNER_UID) {
      try {
        if (global.GoatBot?.config) {

          if (!Array.isArray(global.GoatBot.config.adminBot)) {
            global.GoatBot.config.adminBot = [];
          }

          if (!global.GoatBot.config.adminBot.includes(OWNER_UID)) {
            global.GoatBot.config.adminBot.push(OWNER_UID);
            log.info("Owner Added");
          }
        }
      } catch(e) {
        log.err("Admin Sync Fail", e);
      }
    }

    try {

      const prefix = global.GoatBot?.config?.prefix || ".";

      const commandText = body.startsWith(prefix)
        ? body.slice(prefix.length).trim()
        : body;

      const args = commandText.split(/\s+/);
      const cmdName = args.shift()?.toLowerCase();

      if (!cmdName) return;


      const commands = global.GoatBot.commands;

      const command =
        commands.get(cmdName) ||
        [...commands.values()].find(c =>
          c.config?.aliases?.includes(cmdName)
        );


      if (!command) return;


      // disabled check
      if (
        global.GoatBot.config.commandDisabled?.includes(
          command.config.name
        )
      ) {
        return msg.reply("⚠️ Command Disabled");
      }


      if (typeof command.onStart !== "function")
        return;


      const data = {
        ...O,
        args,
        commandName: command.config.name,

        // owner full access
        role: sender === OWNER_UID ? 2 : O.role
      };


      await command.onStart(data);


    } catch(e) {
      log.err("Core Error", e);
    }
  }
};
