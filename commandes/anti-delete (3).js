const { zokou } = require("../framework/zokou");
const fs = require('fs');

zokou({ nomCom: "antidelete", categorie: "General", reaction: "🛡️" }, async (dest, zk, { arg, ms, repondre }) => {
  const overridesPath = './xmd/events.json';
  let cfg = {};
  try { cfg = JSON.parse(fs.readFileSync(overridesPath, 'utf8')); } catch {}
  const sub = (arg[0] || '').toLowerCase();
  const onoff = (arg[1] || '').toLowerCase();
  if (sub === 'on' || sub === 'off') {
    cfg.antidelete_enabled = sub === 'on' ? 'yes' : 'no';
    fs.writeFileSync(overridesPath, JSON.stringify(cfg, null, 2));
    return repondre(`Antidelete: ${cfg.antidelete_enabled}`);
  }
  if (sub === 'set' && arg[1]) {
    cfg.antidelete_dest = arg[1];
    fs.writeFileSync(overridesPath, JSON.stringify(cfg, null, 2));
    return repondre(`Antidelete destination set: ${cfg.antidelete_dest}`);
  }
  return repondre('Usage: antidelete on|off OR antidelete set <jid>');
});

zokou({ nomCom: "antiviewonce", categorie: "General", reaction: "🛡️" }, async (dest, zk, { arg, ms, repondre }) => {
  const overridesPath = './xmd/events.json';
  let cfg = {};
  try { cfg = JSON.parse(fs.readFileSync(overridesPath, 'utf8')); } catch {}
  const sub = (arg[0] || '').toLowerCase();
  if (sub === 'on' || sub === 'off') {
    cfg.antiviewonce_enabled = sub === 'on' ? 'yes' : 'no';
    fs.writeFileSync(overridesPath, JSON.stringify(cfg, null, 2));
    return repondre(`Antiviewonce: ${cfg.antiviewonce_enabled}`);
  }
  if (sub === 'set' && arg[1]) {
    cfg.antiviewonce_dest = arg[1];
    fs.writeFileSync(overridesPath, JSON.stringify(cfg, null, 2));
    return repondre(`Antiviewonce destination set: ${cfg.antiviewonce_dest}`);
  }
  return repondre('Usage: antiviewonce on|off OR antiviewonce set <jid>');
});
