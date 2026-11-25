(function (globalScope) {
  'use strict';

  /* =========================================================================
     1. FINAL 5 ART STYLES & 26 REAL TIKTOK GIFTS (Each gift -> 1 style + frame)
     ========================================================================= */
  const ART_STYLES = {
    caricature: { id: 'caricature', label: 'Biếm họa', icon: '🎭', desc: 'Vui nhộn · Mặc định' },
    realistic: { id: 'realistic', label: 'Truyền thần', icon: '🏛️', desc: 'Chân thực · Cổ điển' },
    anime: { id: 'anime', label: 'Anime', icon: '✨', desc: 'Sắc nét · Lung linh' },
    sketch: { id: 'sketch', label: 'Phác họa', icon: '✏️', desc: 'Nét bút · Nghệ sĩ' },
    oil: { id: 'oil', label: 'Sơn dầu', icon: '🎨', desc: 'Cọ dày · Bảo tàng' }
  };

  const ALL_STYLE_IDS = ['caricature', 'realistic', 'anime', 'sketch', 'oil'];

  const GIFT_CATALOG = [
    // 1. Biếm họa (caricature) — 6 gifts (Rose 1💎 default!)
    { id: 5655, name: 'Hoa hồng', icon: '🌹', diamonds: 1, style: 'caricature', img: 'assets/gifts/5655-rose.webp', isRose: true },
    { id: 6064, name: 'GG', icon: '👍', diamonds: 1, style: 'caricature', img: 'assets/gifts/6064-gg.webp' },
    { id: 37, name: 'Gấu trúc', icon: '🐼', diamonds: 5, style: 'caricature', img: 'assets/gifts/37-panda.webp' },
    { id: 5879, name: 'Bánh Donut', icon: '🍩', diamonds: 30, style: 'caricature', img: 'assets/gifts/5879-doughnut.webp' },
    { id: 5585, name: 'Pháo giấy', icon: '🎉', diamonds: 100, style: 'caricature', img: 'assets/gifts/5585-confetti.webp' },
    { id: 6007, name: 'Găng đấm bốc', icon: '🥊', diamonds: 299, style: 'caricature', img: 'assets/gifts/6007-boxing_gloves.webp' },

    // 2. Truyền thần (realistic) — 5 gifts (1💎 available!)
    { id: 6224, name: 'Thư tình', icon: '💌', diamonds: 1, style: 'realistic', img: 'assets/gifts/6224-love_letter.webp' },
    { id: 5487, name: 'Tim ngón tay', icon: '🫰', diamonds: 5, style: 'realistic', img: 'assets/gifts/5487-finger_heart.webp' },
    { id: 5658, name: 'Nước hoa', icon: '💐', diamonds: 20, style: 'realistic', img: 'assets/gifts/5658-perfume.webp' },
    { id: 6070, name: 'Gương soi', icon: '🪞', diamonds: 30, style: 'realistic', img: 'assets/gifts/6070-mirror.webp' },
    { id: 5660, name: 'Trái tim tay', icon: '🫶', diamonds: 100, style: 'realistic', img: 'assets/gifts/5660-hand_hearts.webp' },

    // 3. Anime (anime) — 5 gifts (1💎 available!)
    { id: 5827, name: 'Kem ốc quế', icon: '🍦', diamonds: 1, style: 'anime', img: 'assets/gifts/5827-ice_cream_cone.webp' },
    { id: 6053, name: 'Chào Hi', icon: '👋', diamonds: 5, style: 'anime', img: 'assets/gifts/6053-hi.webp' },
    { id: 5657, name: 'Kẹo mút', icon: '🍭', diamonds: 10, style: 'anime', img: 'assets/gifts/5657-lollipop.webp' },
    { id: 5659, name: 'Hạc giấy', icon: '🦢', diamonds: 99, style: 'anime', img: 'assets/gifts/5659-paper_crane.webp' },
    { id: 5509, name: 'Kính râm', icon: '🕶️', diamonds: 199, style: 'anime', img: 'assets/gifts/5509-sunglasses.webp' },

    // 4. Phác họa (sketch) — 5 gifts (1💎 available!)
    { id: 5269, name: 'TikTok', icon: '🎵', diamonds: 1, style: 'sketch', img: 'assets/gifts/5269-tiktok.webp' },
    { id: 5760, name: 'Quả tạ', icon: '🏋️', diamonds: 1, style: 'sketch', img: 'assets/gifts/5760-weights.webp' },
    { id: 5650, name: 'Micro', icon: '🎤', diamonds: 5, style: 'sketch', img: 'assets/gifts/5650-mic.webp' },
    { id: 6052, name: 'Tay cầm game', icon: '🎮', diamonds: 10, style: 'sketch', img: 'assets/gifts/6052-gamepad.webp' },
    { id: 6104, name: 'Mũ lưỡi trai', icon: '🧢', diamonds: 99, style: 'sketch', img: 'assets/gifts/6104-cap.webp' },

    // 5. Sơn dầu (oil) — 5 gifts (1💎 available!)
    { id: 6042, name: 'Loa mini', icon: '🔊', diamonds: 1, style: 'oil', img: 'assets/gifts/6042-mini_speaker.webp' },
    { id: 6093, name: 'Bóng đá', icon: '⚽', diamonds: 1, style: 'oil', img: 'assets/gifts/6093-football.webp' },
    { id: 6097, name: 'Vương miện nhỏ', icon: '👑', diamonds: 99, style: 'oil', img: 'assets/gifts/6097-little_crown.webp' },
    { id: 5897, name: 'Thiên nga', icon: '🦢', diamonds: 699, style: 'oil', img: 'assets/gifts/5897-swan.webp' },
    { id: 6223, name: 'Sư tử', icon: '🦁', diamonds: 29999, style: 'oil', img: 'assets/gifts/6223-lion.webp' }
  ];

  const FRAME_TIERS = {
    wood: { id: 'wood', label: 'Khung Gỗ', icon: '🪵', minDiamonds: 1 },
    gold: { id: 'gold', label: 'Khung Vàng', icon: '🏅', minDiamonds: 5 },
    royal: { id: 'royal', label: 'Khung Hoàng Gia', icon: '👑', minDiamonds: 10 }
  };

  const DEFAULT_CONFIG = {
    drawDurationMs: 45000,
    celebrateDurationMs: 5000,
    vipBaseSeconds: 10,
    maxQueueDisplay: 8,
    maxGallery: 5,
    maxComments: 9
  };

  function normalizeText(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase()
      .trim();
  }

  function normalizeUserKey(username) {
    return normalizeText(username).replace(/\s+/g, '_') || 'khach';
  }

  function isRoseGift(gift) {
    if (!gift) return false;
    if (gift.isRose === true) return true;
    if (Number(gift.id) === 5655) return true;
    const norm = normalizeText(gift.name || '');
    return norm === 'hoa hong' || norm === 'rose' || norm.includes('hoa hong');
  }

  function frameForDiamonds(diamonds) {
    const val = Number(diamonds) || 1;
    if (val >= 10) return 'royal';
    if (val >= 5) return 'gold';
    return 'wood';
  }

  function resolveGift(payload) {
    const id = Number(payload.giftId || payload.id || 0);
    const byId = GIFT_CATALOG.find((g) => g.id === id);
    if (byId) {
      return {
        ...byId,
        diamonds: Number(payload.diamonds || byId.diamonds)
      };
    }
    const normName = normalizeText(payload.giftName || payload.name || '');
    const byName = GIFT_CATALOG.find((g) => normalizeText(g.name) === normName);
    if (byName) {
      return {
        ...byName,
        diamonds: Number(payload.diamonds || byName.diamonds)
      };
    }
    const diamonds = Math.max(1, Number(payload.diamonds || payload.diamondCount || 1));
    const name = payload.giftName || payload.name || 'Quà TikTok';
    const rose = normName === 'rose' || normName.includes('hoa hong');
    const fallbackStyle = rose
      ? 'caricature'
      : ALL_STYLE_IDS[hashString(name || String(id)) % ALL_STYLE_IDS.length];
    return {
      id: id || (Math.abs(hashString(name)) % 90000) + 10000,
      name,
      icon: payload.giftIcon || payload.icon || (diamonds >= 10 ? '👑' : diamonds >= 5 ? '✨' : '🎁'),
      diamonds,
      style: payload.style && ART_STYLES[payload.style] ? payload.style : fallbackStyle,
      img: payload.img || null,
      isRose: rose
    };
  }

  /* =========================================================================
     2. DETERMINISTIC HASH & AVATAR TRAITS GENERATOR
     ========================================================================= */
  function hashString(str) {
    let h = 2166136261 >>> 0;
    const s = String(str || 'avatar');
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function seededRandom(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateAvatarTraits(username) {
    const rand = seededRandom(hashString(normalizeUserKey(username)));
    const pick = (arr) => arr[Math.floor(rand() * arr.length)];

    const skinPalettes = [
      { base: '#f8d5b8', shadow: '#dfae8c', blush: '#f2958b' },
      { base: '#f0c39f', shadow: '#d19b74', blush: '#ea8c82' },
      { base: '#fde2c8', shadow: '#e4ba98', blush: '#f7a09c' },
      { base: '#e2ae82', shadow: '#be8458', blush: '#dd7d72' },
      { base: '#c98f63', shadow: '#9e673e', blush: '#c96f63' }
    ];
    const hairColors = [
      { main: '#241a18', hi: '#4e3c38' },
      { main: '#462b1c', hi: '#784e35' },
      { main: '#7a3f24', hi: '#b56840' },
      { main: '#1e2c45', hi: '#4a6896' },
      { main: '#7c2b48', hi: '#be577a' },
      { main: '#b88337', hi: '#e6b868' },
      { main: '#2f4b3c', hi: '#5a876f' }
    ];
    const backgrounds = [
      ['#f7e2c1', '#e8be8b'],
      ['#d6ece4', '#9ec9ba'],
      ['#f8d9df', '#eab2c0'],
      ['#dbe7f7', '#a6c2e8'],
      ['#f5e9c3', '#e2c986'],
      ['#e5dcf5', '#c0aee3']
    ];
    const shirtColors = ['#c9483b', '#326b8c', '#457b59', '#c47d28', '#7d4469', '#3f5278', '#b5563c'];
    const eyeColors = ['#2c1c14', '#3d2817', '#264663', '#2e5942', '#5c3349'];
    const hairStyles = ['bob', 'spiky', 'long', 'twintails', 'curly', 'bun', 'sidepart'];
    const accessories = ['none', 'glasses', 'roundGlasses', 'beret', 'bow', 'headphones', 'earrings', 'crown'];
    const mouths = ['smile', 'grin', 'gentle', 'cat'];

    const skin = pick(skinPalettes);
    const hair = pick(hairColors);
    const bg = pick(backgrounds);

    return {
      seed: hashString(normalizeUserKey(username)),
      skinBase: skin.base,
      skinShadow: skin.shadow,
      blush: skin.blush,
      hairMain: hair.main,
      hairHi: hair.hi,
      hairStyle: pick(hairStyles),
      eyeColor: pick(eyeColors),
      mouth: pick(mouths),
      accessory: pick(accessories),
      shirtColor: pick(shirtColors),
      bgStart: bg[0],
      bgEnd: bg[1],
      freckles: rand() > 0.72
    };
  }

  function avatarBadgeColor(username) {
    const palette = ['#c95138', '#356d8c', '#467d57', '#b97b24', '#8b4363', '#5a528a', '#9c5234'];
    return palette[hashString(username) % palette.length];
  }

  /* =========================================================================
     3. PURE CORE GAME ENGINE (Updated Spec: Gift -> Style + Frame + Queue)
     ========================================================================= */
  class GameEngine {
    constructor(options = {}) {
      this.config = { ...DEFAULT_CONFIG, ...options };
      this.hooks = options.hooks || {};

      this.running = false;
      this.paused = false;
      this.jobSeq = 1;
      this.currentJob = null;
      this.queue = [];
      this.gallery = []; // max 5 newest completed portraits
      this.completedCount = 0;
      this.completedByUser = new Map();
      this.elevated = []; // 🌟 Treo tranh trên cao
      this.leaderboard = new Map();
      this.totalDiamonds = 0;
      this.comments = [];
      this.heartCount = 0;
    }

    emit(name, payload) {
      if (this.hooks && typeof this.hooks[name] === 'function') {
        this.hooks[name](payload);
      }
    }

    addCommentEntry(entry) {
      this.comments.unshift({
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        username: entry.username,
        text: entry.text,
        kind: entry.kind || 'chat',
        giftImg: entry.giftImg || null,
        giftIcon: entry.giftIcon || null,
        ts: Date.now()
      });
      if (this.comments.length > this.config.maxComments) {
        this.comments.length = this.config.maxComments;
      }
      this.emit('onStateChange', this);
    }

    // Comments do not select art style (style is chosen by GIFT)
    handleComment({ username, text, avatarUrl = null }) {
      const cleanUser = String(username || 'Khách').trim();
      const cleanText = String(text || '').trim();
      if (!cleanText) return null;

      const userKey = normalizeUserKey(cleanUser);
      this.addCommentEntry({
        username: cleanUser,
        text: cleanText,
        kind: 'chat'
      });

      if (avatarUrl) {
        this.updateUserAvatar(userKey, avatarUrl);
      }

      this.emit('onStateChange', this);
      return { userKey };
    }

    updateUserAvatar(userKey, avatarUrl) {
      if (!avatarUrl) return;
      if (this.currentJob && this.currentJob.userKey === userKey && !this.currentJob.avatarUrl) {
        this.currentJob.avatarUrl = avatarUrl;
      }
      for (const q of this.queue) {
        if (q.userKey === userKey && !q.avatarUrl) {
          q.avatarUrl = avatarUrl;
        }
      }
    }

    handleLike({ username, count = 1 }) {
      const cleanUser = String(username || 'Khách').trim();
      const safeCount = Math.max(1, Number(count) || 1);
      // Hearts never add leaderboard points and never enqueue
      this.heartCount += safeCount;
      this.emit('onHeart', { username: cleanUser, count: safeCount });
      this.emit('onStateChange', this);
      return { heartCount: this.heartCount };
    }

    recordGiftLeaderboard(userKey, username, diamondsAdded, giftCount) {
      const existing = this.leaderboard.get(userKey) || {
        userKey,
        username,
        diamonds: 0,
        giftCount: 0
      };
      existing.username = username;
      existing.diamonds += diamondsAdded;
      existing.giftCount += giftCount;
      this.leaderboard.set(userKey, existing);
      this.totalDiamonds += diamondsAdded;
    }

    enqueuePortrait({ username, avatarUrl = null, gift, frame }) {
      const userKey = normalizeUserKey(username);
      const style = gift.style && ART_STYLES[gift.style] ? gift.style : 'caricature';
      const job = {
        id: this.jobSeq++,
        userKey,
        username,
        avatarUrl,
        giftId: gift.id,
        giftName: gift.name,
        giftIcon: gift.icon,
        giftImg: gift.img || null,
        diamonds: gift.diamonds,
        style,
        frame,
        elapsedMs: 0,
        celebrateElapsedMs: 0,
        status: 'queued',
        completedDataUrl: null
      };
      this.queue.push(job);
      return job;
    }

    // ANY gift orders portrait(s) in gift.style AND sets frame by diamond tier
    handleGift(payload) {
      const username = String(payload.username || 'Khách').trim();
      const userKey = normalizeUserKey(username);
      const count = Math.max(1, Number(payload.count || payload.repeatCount || 1));
      const gift = resolveGift(payload);
      const avatarUrl = payload.avatarUrl || null;
      const totalDia = gift.diamonds * count;
      const frame = frameForDiamonds(gift.diamonds);
      const styleInfo = ART_STYLES[gift.style] || ART_STYLES.caricature;
      const frameInfo = FRAME_TIERS[frame] || FRAME_TIERS.wood;

      // Gift points only rank Top Tặng Quà
      this.recordGiftLeaderboard(userKey, username, totalDia, count);

      const enqueuedJobs = [];
      for (let i = 0; i < count; i++) {
        enqueuedJobs.push(this.enqueuePortrait({ username, avatarUrl, gift, frame }));
      }

      let elevatedEntry = null;

      // Big Gift (>=10 diamonds) -> Treo tranh trên cao 10s (+10s stacking per same gift & user)
      // Style label ALWAYS uses gift.style (canonical style of that gift, never mislabeled!)
      if (gift.diamonds >= 10) {
        const addSeconds = this.config.vipBaseSeconds * count;
        const elevKey = `${userKey}::${gift.id}`;
        let entry = this.elevated.find((e) => e.key === elevKey);

        if (entry) {
          entry.remainingSeconds += addSeconds;
          entry.totalSeconds += addSeconds;
          entry.giftCount += count;
          entry.style = gift.style;
        } else {
          const latestDone = this.completedByUser.get(userKey) || null;
          entry = {
            key: elevKey,
            userKey,
            username,
            avatarUrl,
            giftId: gift.id,
            giftName: gift.name,
            giftIcon: gift.icon,
            giftImg: gift.img || null,
            diamonds: gift.diamonds,
            giftCount: count,
            remainingSeconds: addSeconds,
            totalSeconds: addSeconds,
            waitingForPortrait: !latestDone,
            paintingDataUrl: latestDone ? latestDone.dataUrl : null,
            style: gift.style,
            frame
          };
          this.elevated.unshift(entry);
        }
        elevatedEntry = entry;

        this.addCommentEntry({
          username,
          text: `tặng ${count}× ${gift.name} (${totalDia}💎) → ${styleInfo.label} · ${frameInfo.label} + Treo cao ${Math.ceil(entry.remainingSeconds)}s!`,
          kind: 'vip',
          giftImg: gift.img,
          giftIcon: gift.icon
        });
      } else {
        this.addCommentEntry({
          username,
          text: `tặng ${count}× ${gift.name} (${totalDia}💎) → Vẽ ${styleInfo.label} · ${frameInfo.label}!`,
          kind: 'gift',
          giftImg: gift.img,
          giftIcon: gift.icon
        });
      }

      if (!this.currentJob) {
        this.startNextJob();
      }

      if (gift.diamonds >= 10) {
        this.emit('onBigGift', { username, count, gift, frame, style: gift.style, elevatedEntry, jobs: enqueuedJobs });
      } else {
        this.emit('onPortraitGift', { username, count, gift, frame, style: gift.style, jobs: enqueuedJobs });
      }

      this.emit('onStateChange', this);
      return {
        gift,
        count,
        style: gift.style,
        frame,
        enqueuedJobs,
        elevatedEntry
      };
    }

    startNextJob() {
      if (this.currentJob || this.queue.length === 0) return null;
      const next = this.queue.shift(); // Strict FIFO
      next.status = 'drawing';
      next.elapsedMs = 0;
      next.celebrateElapsedMs = 0;
      this.currentJob = next;
      this.emit('onJobStart', next);
      this.emit('onStateChange', this);
      return next;
    }

    completeCurrentJob(dataUrlOverride = null) {
      if (!this.currentJob) return null;
      const job = this.currentJob;
      job.status = 'celebrating';
      job.elapsedMs = this.config.drawDurationMs;
      job.celebrateElapsedMs = 0;

      const renderedUrl =
        dataUrlOverride ||
        (this.hooks.onCapturePortrait ? this.hooks.onCapturePortrait(job) : null) ||
        `portrait://${job.id}`;
      job.completedDataUrl = renderedUrl;

      const record = {
        id: job.id,
        userKey: job.userKey,
        username: job.username,
        avatarUrl: job.avatarUrl,
        style: job.style,
        frame: job.frame,
        giftId: job.giftId,
        giftName: job.giftName,
        giftIcon: job.icon,
        giftImg: job.giftImg,
        dataUrl: renderedUrl,
        completedAt: Date.now()
      };

      this.completedCount++;
      this.gallery.unshift(record);
      if (this.gallery.length > this.config.maxGallery) {
        this.gallery.length = this.config.maxGallery;
      }
      this.completedByUser.set(job.userKey, record);

      // Activate pending VIP elevated entries for this user WITHOUT overwriting their canonical gift style!
      for (const entry of this.elevated) {
        if (entry.userKey === job.userKey) {
          if (entry.waitingForPortrait || entry.giftId === record.giftId) {
            entry.paintingDataUrl = record.dataUrl;
            entry.waitingForPortrait = false;
          }
        }
      }

      this.emit('onJobComplete', record);
      this.emit('onStateChange', this);
      return record;
    }

    tick(dtMs) {
      if (this.paused || dtMs <= 0) return;

      let elevChanged = false;
      for (let i = this.elevated.length - 1; i >= 0; i--) {
        const item = this.elevated[i];
        if (!item.waitingForPortrait) {
          item.remainingSeconds = Math.max(0, item.remainingSeconds - dtMs / 1000);
          elevChanged = true;
          if (item.remainingSeconds <= 0) {
            this.elevated.splice(i, 1);
          }
        }
      }

      if (!this.currentJob) {
        if (this.queue.length > 0) {
          this.startNextJob();
        }
      } else if (this.currentJob.status === 'drawing') {
        this.currentJob.elapsedMs += dtMs;
        if (this.currentJob.elapsedMs >= this.config.drawDurationMs) {
          this.completeCurrentJob();
        }
      } else if (this.currentJob.status === 'celebrating') {
        this.currentJob.celebrateElapsedMs += dtMs;
        if (this.currentJob.celebrateElapsedMs >= this.config.celebrateDurationMs) {
          this.currentJob = null;
          this.startNextJob();
          this.emit('onStateChange', this);
          return;
        }
      }

      if (elevChanged) {
        this.emit('onElevatedTick', this.elevated);
      }
    }

    // Single source of truth for progress % across canvas chip, bar fill, and readout
    getDrawingProgress() {
      if (!this.currentJob) {
        return { progress: 0, pct: 0, phaseIndex: -1, remainingSec: Math.ceil(this.config.drawDurationMs / 1000) };
      }
      if (this.currentJob.status === 'celebrating') {
        return { progress: 1, pct: 100, phaseIndex: 3, remainingSec: 0 };
      }
      const p = Math.min(1, Math.max(0, this.currentJob.elapsedMs / this.config.drawDurationMs));
      const pct = Math.round(p * 100);
      let phaseIndex = 0;
      if (p >= 0.88) phaseIndex = 3;
      else if (p >= 0.55) phaseIndex = 2;
      else if (p >= 0.25) phaseIndex = 1;
      const remainingSec = Math.max(0, Math.ceil((this.config.drawDurationMs - this.currentJob.elapsedMs) / 1000));
      return { progress: p, pct, phaseIndex, remainingSec };
    }

    // Returns VIP with most remaining seconds + count of other active VIPs (no active VIP ever hidden)
    getElevatedDisplaySummary() {
      const active = this.elevated.filter((e) => e.remainingSeconds > 0);
      if (active.length === 0) {
        return { primary: null, othersCount: 0, total: 0 };
      }
      const sorted = [...active].sort((a, b) => {
        if (b.remainingSeconds !== a.remainingSeconds) return b.remainingSeconds - a.remainingSeconds;
        return Number(a.waitingForPortrait) - Number(b.waitingForPortrait);
      });
      return {
        primary: sorted[0],
        othersCount: sorted.length - 1,
        total: sorted.length
      };
    }

    getLeaderboardTop(limit = 8) {
      return Array.from(this.leaderboard.values())
        .sort((a, b) => b.diamonds - a.diamonds || b.giftCount - a.giftCount)
        .slice(0, limit);
    }

    getVisibleQueue() {
      return {
        active: this.currentJob,
        waiting: this.queue.slice(0, this.config.maxQueueDisplay),
        overflow: Math.max(0, this.queue.length - this.config.maxQueueDisplay),
        totalWaiting: this.queue.length
      };
    }

    togglePause() {
      this.paused = !this.paused;
      this.emit('onPauseChange', this.paused);
      this.emit('onStateChange', this);
      return this.paused;
    }
  }

  /* =========================================================================
     4. PROGRESSIVE 5-STYLE PORTRAIT RENDERER
        Styles: caricature (Biếm họa), realistic (Truyền thần), anime (Anime),
                sketch (Phác họa), oil (Sơn dầu)
     ========================================================================= */
  class PortraitRenderer {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas ? canvas.getContext('2d') : null;
      this.imageCache = new Map();
      this.brushTip = { x: 210, y: 245, active: false };
    }

    loadLiveAvatar(url) {
      if (!url || typeof Image === 'undefined') return null;
      const cached = this.imageCache.get(url);
      if (cached) return cached.loaded ? cached.img : null;

      const entry = { img: new Image(), loaded: false, failed: false };
      entry.img.crossOrigin = 'anonymous';
      entry.img.onload = () => {
        entry.loaded = true;
      };
      entry.img.onerror = () => {
        entry.failed = true;
      };
      entry.img.src = url;
      this.imageCache.set(url, entry);
      return null;
    }

    renderIdle(timeSec) {
      const ctx = this.ctx;
      if (!ctx) return;
      const w = this.canvas.width;
      const h = this.canvas.height;
      this.brushTip.active = false;

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#fdf7ea');
      grad.addColorStop(1, '#efe1c4');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(130, 96, 56, 0.06)';
      ctx.lineWidth = 1;
      for (let y = 16; y < h; y += 22) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(w / 2, h / 2 - 22);
      const pulse = 1 + Math.sin(timeSec * 2) * 0.015;
      ctx.scale(pulse, pulse);

      ctx.strokeStyle = 'rgba(158, 102, 46, 0.45)';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.ellipse(0, 0, 118, 142, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(130, 82, 38, 0.14)';
      ctx.beginPath();
      ctx.arc(0, -28, 42, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 68, 68, Math.PI, 0);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = '#5c381c';
      ctx.font = '800 24px "Playfair Display", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText('Phòng Tranh Ông Ba', w / 2, h - 102);

      ctx.fillStyle = '#8b5f38';
      ctx.font = '600 14.5px "Be Vietnam Pro", sans-serif';
      ctx.fillText('Tặng quà bất kỳ để Ông vẽ chân dung', w / 2, h - 72);
      ctx.fillText('Biếm họa · Truyền thần · Anime · Phác họa · Sơn dầu', w / 2, h - 48);
    }

    renderPortrait(job, progress, timeSec = 0) {
      const ctx = this.ctx;
      if (!ctx || !job) return;
      const w = this.canvas.width;
      const h = this.canvas.height;
      const style = job.style || 'caricature';
      const traits = generateAvatarTraits(job.username);
      const liveImg = job.avatarUrl ? this.loadLiveAvatar(job.avatarUrl) : null;

      const pOutline = Math.min(1, progress / 0.25);
      const pDetail = Math.min(1, Math.max(0, (progress - 0.25) / 0.3));
      const pColor = Math.min(1, Math.max(0, (progress - 0.55) / 0.33));
      const pFrame = Math.min(1, Math.max(0, (progress - 0.88) / 0.12));

      ctx.save();
      ctx.clearRect(0, 0, w, h);

      // 1. Base paper/canvas surface
      this.drawPaperBase(ctx, w, h, style, traits, pColor);

      // 2. Live TikTok photo filter if available
      if (liveImg && pColor > 0.05) {
        this.drawStylizedLivePhoto(ctx, w, h, liveImg, style, pColor);
      }

      // 3. Proportions tuned per artistic genre
      const isCaricature = style === 'caricature';
      const isRealistic = style === 'realistic';
      const isAnime = style === 'anime';
      const cx = w * 0.5;
      const cy = isCaricature ? h * 0.43 : h * 0.44;
      const headRx = isCaricature ? 104 : isRealistic ? 80 : isAnime ? 82 : 85;
      const headRy = isCaricature ? 102 : isRealistic ? 104 : isAnime ? 98 : 102;

      if (!liveImg && pColor > 0) {
        this.drawColorUnderlay(ctx, w, h, cx, cy, headRx, headRy, traits, style, pColor);
      }

      if (pOutline > 0) {
        this.drawOutlinePhase(ctx, cx, cy, headRx, headRy, traits, style, pOutline, pColor);
      }

      if (pDetail > 0) {
        this.drawDetailsPhase(ctx, cx, cy, headRx, headRy, traits, style, pDetail, pColor, liveImg);
      }

      if (pColor > 0) {
        this.drawStyleMediumOverlay(ctx, w, h, cx, cy, headRx, headRy, traits, style, pColor);
      }

      if (pFrame > 0) {
        this.drawFinishingPhase(ctx, w, h, job, pFrame);
      }

      if (progress > 0.01 && progress < 0.995) {
        const angle = timeSec * 4.5 + progress * 18;
        const radiusX = progress < 0.25 ? headRx * 1.05 : progress < 0.55 ? headRx * 0.65 : headRx * 1.15;
        const radiusY = progress < 0.25 ? headRy * 1.05 : progress < 0.55 ? headRy * 0.55 : headRy * 1.1;
        const bx = cx + Math.cos(angle) * radiusX * (0.45 + 0.5 * Math.sin(timeSec * 1.7));
        const by = cy + Math.sin(angle * 1.3) * radiusY * 0.72 + (progress > 0.88 ? 140 : 0);
        this.brushTip = { x: bx, y: by, active: true };
        this.drawActiveBrushTip(ctx, bx, by, style, traits);
      } else {
        this.brushTip.active = false;
      }

      ctx.restore();
    }

    drawPaperBase(ctx, w, h, style, traits, pColor) {
      if (style === 'sketch') {
        // Warm ivory sketchpad paper
        const g = ctx.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, '#fbf6ea');
        g.addColorStop(1, '#eae0cb');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      } else if (style === 'realistic') {
        // Classic Vietnamese truyền thần charcoal/sepia studio paper
        const g = ctx.createRadialGradient(w * 0.5, h * 0.42, 40, w * 0.5, h * 0.5, w * 0.78);
        g.addColorStop(0, '#f4ecdc');
        g.addColorStop(0.65, '#dfd2bc');
        g.addColorStop(1, '#b8a58b');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      } else {
        ctx.fillStyle = '#fbf4e4';
        ctx.fillRect(0, 0, w, h);
        if (pColor > 0) {
          ctx.save();
          ctx.globalAlpha = Math.min(1, pColor * 1.2);
          const bgGrad = ctx.createRadialGradient(w * 0.5, h * 0.36, 30, w * 0.5, h * 0.5, w * 0.8);
          bgGrad.addColorStop(0, traits.bgStart);
          bgGrad.addColorStop(1, traits.bgEnd);
          ctx.fillStyle = bgGrad;
          ctx.fillRect(0, 0, w, h);

          // Biếm họa: comic sunburst rays behind subject
          if (style === 'caricature') {
            ctx.translate(w * 0.5, h * 0.44);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.24)';
            for (let i = 0; i < 12; i++) {
              ctx.rotate((Math.PI * 2) / 12);
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(-22, -320);
              ctx.lineTo(22, -320);
              ctx.closePath();
              ctx.fill();
            }
          }
          ctx.restore();
        }
      }

      // Subtle paper grain / canvas weave
      ctx.strokeStyle = 'rgba(110, 82, 50, 0.045)';
      ctx.lineWidth = 1;
      for (let i = 0; i < w; i += 14) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
    }

    drawStylizedLivePhoto(ctx, w, h, img, style, pColor) {
      ctx.save();
      ctx.globalAlpha = Math.min(0.95, pColor * 1.1);
      const size = Math.min(w - 64, 330);
      const x = (w - size) / 2;
      const y = 52;

      ctx.beginPath();
      if (style === 'caricature') {
        ctx.arc(w / 2, y + size / 2, size * 0.47, 0, Math.PI * 2);
      } else {
        ctx.roundRect(x, y, size, size * 1.06, 24);
      }
      ctx.clip();

      if (style === 'realistic') {
        ctx.filter = 'sepia(55%) grayscale(45%) contrast(128%) brightness(102%)';
      } else if (style === 'sketch') {
        ctx.filter = 'grayscale(100%) contrast(145%) brightness(112%)';
      } else if (style === 'oil') {
        ctx.filter = 'saturate(142%) contrast(118%)';
      } else if (style === 'anime') {
        ctx.filter = 'saturate(148%) contrast(122%) brightness(106%)';
      } else {
        ctx.filter = 'saturate(135%) contrast(115%)';
      }

      ctx.drawImage(img, x, y, size, size * 1.06);
      ctx.filter = 'none';
      ctx.restore();
    }

    drawColorUnderlay(ctx, w, h, cx, cy, headRx, headRy, traits, style, pColor) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, pColor * 1.15);
      const isMono = style === 'sketch' || style === 'realistic';
      const isRealistic = style === 'realistic';
      const isCaricature = style === 'caricature';

      // Back hair silhouette fill
      ctx.fillStyle = isRealistic ? '#3f352b' : style === 'sketch' ? '#6d665d' : traits.hairMain;
      this.traceBackHair(ctx, cx, cy, headRx, headRy, traits.hairStyle);
      ctx.fill();

      // Shoulders / clothing
      const neckY = cy + headRy * 0.86;
      const bodyTop = neckY + (isCaricature ? 14 : 24);
      const shoulderSpread = isCaricature ? 0.92 : 1.25;
      ctx.fillStyle = isRealistic ? '#594b3e' : style === 'sketch' ? '#968f84' : traits.shirtColor;
      ctx.beginPath();
      ctx.moveTo(cx - headRx * shoulderSpread, h - 38);
      ctx.quadraticCurveTo(cx - headRx * (shoulderSpread - 0.14), bodyTop, cx - 24, bodyTop - 6);
      ctx.lineTo(cx + 24, bodyTop - 6);
      ctx.quadraticCurveTo(cx + headRx * (shoulderSpread - 0.14), bodyTop, cx + headRx * shoulderSpread, h - 38);
      ctx.closePath();
      ctx.fill();

      // Neck
      ctx.fillStyle = isRealistic ? '#b4a088' : style === 'sketch' ? '#d4cdc0' : traits.skinShadow;
      ctx.beginPath();
      ctx.roundRect(cx - 22, neckY - 12, 44, 44, 15);
      ctx.fill();

      // Ears (playfully bigger in caricature!)
      const earRx = isCaricature ? 20 : 14;
      const earRy = isCaricature ? 26 : 21;
      ctx.fillStyle = isRealistic ? '#cbb9a1' : style === 'sketch' ? '#e1dacd' : traits.skinBase;
      ctx.beginPath();
      ctx.ellipse(cx - headRx + 2, cy + 8, earRx, earRy, -0.15, 0, Math.PI * 2);
      ctx.ellipse(cx + headRx - 2, cy + 8, earRx, earRy, 0.15, 0, Math.PI * 2);
      ctx.fill();

      // Face shading
      const faceGrad = ctx.createRadialGradient(cx - 22, cy - 26, 14, cx + 10, cy + 12, headRy * 1.25);
      if (isRealistic) {
        faceGrad.addColorStop(0, '#f3eadb');
        faceGrad.addColorStop(0.6, '#d8c8b0');
        faceGrad.addColorStop(1, '#9d8972');
      } else if (style === 'sketch') {
        faceGrad.addColorStop(0, '#faf6ed');
        faceGrad.addColorStop(1, '#ded7c9');
      } else {
        faceGrad.addColorStop(0, traits.skinBase);
        faceGrad.addColorStop(1, traits.skinShadow);
      }
      ctx.fillStyle = faceGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy, headRx, headRy, 0, 0, Math.PI * 2);
      ctx.fill();

      // Truyền thần: subtle realistic studio cheekbone & jaw modeling
      if (isRealistic) {
        ctx.fillStyle = 'rgba(72, 54, 38, 0.16)';
        ctx.beginPath();
        ctx.ellipse(cx + headRx * 0.48, cy + 18, 22, 42, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy + headRy * 0.72, 24, 0, Math.PI);
        ctx.fill();
      }

      // Blush for color styles
      if (!isMono) {
        ctx.fillStyle = traits.blush;
        ctx.globalAlpha = isCaricature ? 0.42 * pColor : 0.25 * pColor;
        ctx.beginPath();
        ctx.ellipse(cx - headRx * 0.5, cy + headRy * 0.16, isCaricature ? 22 : 15, 11, 0, 0, Math.PI * 2);
        ctx.ellipse(cx + headRx * 0.5, cy + headRy * 0.16, isCaricature ? 22 : 15, 11, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = Math.min(1, pColor * 1.15);
      }

      // Front hair fill
      const hairGrad = ctx.createLinearGradient(cx, cy - headRy - 30, cx, cy + 20);
      if (isRealistic) {
        hairGrad.addColorStop(0, '#615244');
        hairGrad.addColorStop(1, '#2a211a');
      } else if (style === 'sketch') {
        hairGrad.addColorStop(0, '#6b655c');
        hairGrad.addColorStop(1, '#443f38');
      } else {
        hairGrad.addColorStop(0, traits.hairHi);
        hairGrad.addColorStop(0.55, traits.hairMain);
        hairGrad.addColorStop(1, traits.hairMain);
      }
      ctx.fillStyle = hairGrad;
      this.traceFrontHair(ctx, cx, cy, headRx, headRy, traits.hairStyle);
      ctx.fill();

      // Anime glossy hair halo highlight
      if (style === 'anime') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.76)';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx, cy - headRy * 0.12, headRx * 0.82, Math.PI * 1.18, Math.PI * 1.82);
        ctx.stroke();
      }

      ctx.restore();
    }

    drawOutlinePhase(ctx, cx, cy, headRx, headRy, traits, style, pOutline, pColor) {
      ctx.save();
      const sketchColor = style === 'realistic' ? '#3a2d21' : style === 'caricature' ? '#1f120b' : '#2a1d14';
      ctx.strokeStyle = sketchColor;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (pColor < 0.75) {
        ctx.save();
        ctx.strokeStyle = 'rgba(120, 95, 70, 0.28)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([6, 5]);
        ctx.globalAlpha = (1 - pColor * 1.2) * Math.min(1, pOutline * 2);
        ctx.beginPath();
        ctx.moveTo(cx, cy - headRy - 26);
        ctx.lineTo(cx, cy + headRy + 32);
        ctx.moveTo(cx - headRx - 22, cy);
        ctx.lineTo(cx + headRx + 22, cy);
        ctx.stroke();
        ctx.restore();
      }

      ctx.lineWidth = style === 'caricature' ? 4.4 : style === 'anime' ? 3 : style === 'realistic' ? 1.8 : 2.3;
      ctx.beginPath();
      ctx.ellipse(cx, cy, headRx, headRy, 0, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, pOutline * 1.3));
      ctx.stroke();

      // Phác họa: expressive loose double-sketch contour line
      if (style === 'sketch') {
        ctx.strokeStyle = 'rgba(48, 42, 36, 0.48)';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(cx + 3, cy - 2, headRx + 2, headRy - 1, 0.04, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, pOutline * 1.25));
        ctx.stroke();
        ctx.strokeStyle = sketchColor;
        ctx.lineWidth = 2.2;
      }

      if (pOutline > 0.45) {
