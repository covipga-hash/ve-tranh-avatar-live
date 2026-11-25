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
              const sp = Math.min(1, (pOutline - 0.45) / 0.55);
        const bodyTop = cy + headRy * 0.86 + (style === 'caricature' ? 14 : 22);
        const spread = style === 'caricature' ? 0.92 : 1.18;
        ctx.beginPath();
        ctx.moveTo(cx - 24, bodyTop - 6);
        ctx.quadraticCurveTo(cx - headRx * (spread - 0.2) * sp, bodyTop + 6, cx - headRx * spread * sp, bodyTop + 120 * sp);
        ctx.moveTo(cx + 24, bodyTop - 6);
        ctx.quadraticCurveTo(cx + headRx * (spread - 0.2) * sp, bodyTop + 6, cx + headRx * spread * sp, bodyTop + 120 * sp);
        ctx.stroke();
      }

      if (pOutline > 0.6) {
        ctx.globalAlpha = Math.min(1, (pOutline - 0.6) / 0.4);
        this.traceFrontHair(ctx, cx, cy, headRx, headRy, traits.hairStyle);
        ctx.stroke();
      }

      ctx.restore();
    }

    drawDetailsPhase(ctx, cx, cy, headRx, headRy, traits, style, pDetail, pColor, liveImg) {
      if (liveImg && pColor > 0.45) return;
      ctx.save();
      const isMono = style === 'sketch' || style === 'realistic';
      const isAnime = style === 'anime';
      const isCaricature = style === 'caricature';
      const isRealistic = style === 'realistic';

      const eyeOffsetX = headRx * (isCaricature ? 0.34 : 0.36);
      const eyeY = cy + (isCaricature ? -6 : -2);
      const eyeW = isAnime ? 20 : isCaricature ? 19 : isRealistic ? 13 : 14;
      const eyeH = isAnime ? 22 : isCaricature ? 18 : isRealistic ? 9 : 12;

      if (pDetail > 0.05) {
        const ep = Math.min(1, pDetail / 0.45);
        ctx.globalAlpha = ep;
        for (const dir of [-1, 1]) {
          const ex = cx + dir * eyeOffsetX;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.ellipse(ex, eyeY, eyeW, eyeH * 0.86, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = isMono ? '#2c241d' : traits.eyeColor;
          ctx.beginPath();
          ctx.ellipse(ex, eyeY + 1, eyeW * 0.6, eyeH * 0.72, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#140e0b';
          ctx.beginPath();
          ctx.arc(ex, eyeY + 2, eyeW * 0.28, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(ex - eyeW * 0.24, eyeY - eyeH * 0.24, isAnime || isCaricature ? 5 : 2.8, 0, Math.PI * 2);
          ctx.fill();
          if (isAnime) {
            ctx.beginPath();
            ctx.arc(ex + eyeW * 0.22, eyeY + eyeH * 0.22, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.strokeStyle = '#1c130e';
          ctx.lineWidth = isAnime || isCaricature ? 3.8 : isRealistic ? 2 : 2.5;
          ctx.beginPath();
          ctx.arc(ex, eyeY + 2, eyeW * 1.02, Math.PI * 1.12, Math.PI * 1.88);
          ctx.stroke();

          // Eyebrow (expressive arched in caricature!)
          ctx.strokeStyle = isMono ? '#362c22' : traits.hairMain;
          ctx.lineWidth = isCaricature ? 4.5 : 3;
          ctx.beginPath();
          const browLift = isCaricature && dir === 1 ? 6 : 0;
          ctx.moveTo(ex - eyeW * 0.85, eyeY - eyeH - 9 - browLift);
          ctx.quadraticCurveTo(ex, eyeY - eyeH - 18 - browLift, ex + eyeW * 0.85, eyeY - eyeH - 8);
          ctx.stroke();
        }
      }

      if (pDetail > 0.35) {
        const mp = Math.min(1, (pDetail - 0.35) / 0.35);
        ctx.globalAlpha = mp;

        // Nose (playful round button nose in caricature; sculpted bridge in realistic)
        ctx.strokeStyle = isMono ? '#4d4135' : '#8a523c';
        ctx.lineWidth = isCaricature ? 3 : 2;
        ctx.beginPath();
        if (isCaricature) {
          ctx.arc(cx, cy + 20, 8, Math.PI * 0.15, Math.PI * 0.85);
        } else if (isAnime) {
          ctx.arc(cx, cy + 20, 3, 0, Math.PI);
        } else if (isRealistic) {
          ctx.moveTo(cx - 2, cy + 2);
          ctx.lineTo(cx - 5, cy + 24);
          ctx.quadraticCurveTo(cx, cy + 29, cx + 6, cy + 24);
        } else {
          ctx.moveTo(cx, cy + 6);
          ctx.quadraticCurveTo(cx - 4, cy + 24, cx + 6, cy + 26);
        }
        ctx.stroke();

        // Mouth (big comic grin in caricature, dignified gentle smile in realistic)
        const my = cy + (isCaricature ? 44 : 48);
        ctx.strokeStyle = isMono ? '#362c22' : '#963b32';
        ctx.lineWidth = isCaricature ? 3.4 : 2.5;
        ctx.beginPath();
        if (isCaricature || traits.mouth === 'grin') {
          const mw = isCaricature ? 32 : 22;
          ctx.arc(cx, my - 6, mw, 0.12, Math.PI - 0.12);
          ctx.closePath();
          ctx.fillStyle = isMono ? '#ece5d9' : '#fff8f2';
          ctx.fill();
          ctx.stroke();
        } else if (traits.mouth === 'cat' && isAnime) {
          ctx.moveTo(cx - 16, my);
          ctx.quadraticCurveTo(cx - 8, my + 10, cx, my + 2);
          ctx.quadraticCurveTo(cx + 8, my + 10, cx + 16, my);
          ctx.stroke();
        } else {
          ctx.moveTo(cx - 18, my);
          ctx.quadraticCurveTo(cx, my + (isRealistic ? 8 : 13), cx + 18, my);
          ctx.stroke();
        }
      }

      if (pDetail > 0.65) {
        const ap = Math.min(1, (pDetail - 0.65) / 0.35);
        ctx.globalAlpha = ap;
        this.drawAccessory(ctx, cx, cy, headRx, headRy, eyeOffsetX, eyeY, traits, isMono);
      }

      ctx.restore();
    }

    drawAccessory(ctx, cx, cy, headRx, headRy, eyeOffsetX, eyeY, traits, isMono) {
      const acc = traits.accessory;
      if (acc === 'glasses' || acc === 'roundGlasses') {
        ctx.strokeStyle = isMono ? '#2b241d' : '#3a2415';
        ctx.lineWidth = 3;
        for (const dir of [-1, 1]) {
          const ex = cx + dir * eyeOffsetX;
          ctx.beginPath();
          if (acc === 'roundGlasses') {
            ctx.arc(ex, eyeY, 24, 0, Math.PI * 2);
          } else {
            ctx.roundRect(ex - 25, eyeY - 17, 50, 34, 8);
          }
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(cx - eyeOffsetX + 24, eyeY);
        ctx.lineTo(cx + eyeOffsetX - 24, eyeY);
        ctx.stroke();
      } else if (acc === 'beret') {
        ctx.fillStyle = isMono ? '#4d4338' : '#a8332a';
        ctx.strokeStyle = '#24150e';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.ellipse(cx + 8, cy - headRy + 4, headRx * 0.92, 34, -0.14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + 12, cy - headRy - 28);
        ctx.lineTo(cx + 18, cy - headRy - 40);
        ctx.stroke();
      } else if (acc === 'crown') {
        ctx.fillStyle = isMono ? '#9e8f7b' : '#f7c948';
        ctx.strokeStyle = '#754d0c';
        ctx.lineWidth = 2.4;
        const topY = cy - headRy - 6;
        ctx.beginPath();
        ctx.moveTo(cx - 34, topY + 6);
        ctx.lineTo(cx - 40, topY - 26);
        ctx.lineTo(cx - 16, topY - 8);
        ctx.lineTo(cx, topY - 34);
        ctx.lineTo(cx + 16, topY - 8);
        ctx.lineTo(cx + 40, topY - 26);
        ctx.lineTo(cx + 34, topY + 6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (acc === 'bow') {
        ctx.fillStyle = isMono ? '#786b5e' : '#e45c7a';
        const bx = cx + headRx * 0.62;
        const by = cy - headRy * 0.68;
        ctx.beginPath();
        ctx.ellipse(bx - 16, by, 18, 11, -0.35, 0, Math.PI * 2);
        ctx.ellipse(bx + 16, by, 18, 11, 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bx, by, 7, 0, Math.PI * 2);
        ctx.fill();
      } else if (acc === 'headphones') {
        ctx.strokeStyle = isMono ? '#3d352d' : '#2e4057';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(cx, cy - 6, headRx + 14, Math.PI * 1.05, Math.PI * 1.95);
        ctx.stroke();
        ctx.fillStyle = isMono ? '#5c5246' : '#e6a938';
        ctx.beginPath();
        ctx.roundRect(cx - headRx - 20, cy - 16, 16, 46, 8);
        ctx.roundRect(cx + headRx + 4, cy - 16, 16, 46, 8);
        ctx.fill();
      } else if (acc === 'earrings') {
        ctx.fillStyle = isMono ? '#776a5b' : '#f2c14e';
        ctx.beginPath();
        ctx.arc(cx - headRx + 2, cy + 32, 6, 0, Math.PI * 2);
        ctx.arc(cx + headRx - 2, cy + 32, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    traceBackHair(ctx, cx, cy, headRx, headRy, hairStyle) {
      ctx.beginPath();
      if (hairStyle === 'long') {
        ctx.roundRect(cx - headRx - 22, cy - headRy * 0.55, (headRx + 22) * 2, headRy * 2.25, 58);
      } else if (hairStyle === 'twintails') {
        ctx.ellipse(cx - headRx - 26, cy + 48, 30, 86, 0.16, 0, Math.PI * 2);
        ctx.ellipse(cx + headRx + 26, cy + 48, 30, 86, -0.16, 0, Math.PI * 2);
      } else if (hairStyle === 'bun') {
        ctx.arc(cx, cy - headRy - 26, 36, 0, Math.PI * 2);
        ctx.arc(cx, cy - 8, headRx + 10, Math.PI, 0);
      } else if (hairStyle === 'curly') {
        for (let a = 0; a < Math.PI * 2; a += 0.52) {
          ctx.moveTo(cx + Math.cos(a) * (headRx + 14), cy - 8 + Math.sin(a) * (headRy + 12));
          ctx.arc(cx + Math.cos(a) * (headRx + 8), cy - 8 + Math.sin(a) * (headRy + 6), 28, 0, Math.PI * 2);
        }
      } else {
        ctx.ellipse(cx, cy - 12, headRx + 14, headRy + 14, 0, Math.PI * 0.9, Math.PI * 2.1);
      }
    }

    traceFrontHair(ctx, cx, cy, headRx, headRy, hairStyle) {
      ctx.beginPath();
      if (hairStyle === 'spiky') {
        ctx.moveTo(cx - headRx - 6, cy - 6);
        ctx.quadraticCurveTo(cx - headRx, cy - headRy - 24, cx - headRx * 0.35, cy - headRy - 18);
        ctx.lineTo(cx - 12, cy - headRy - 34);
        ctx.lineTo(cx + 12, cy - headRy - 16);
        ctx.lineTo(cx + 42, cy - headRy - 30);
        ctx.quadraticCurveTo(cx + headRx + 6, cy - headRy - 14, cx + headRx + 6, cy - 6);
        ctx.lineTo(cx + headRx * 0.65, cy - 34);
        ctx.lineTo(cx + 22, cy - 18);
        ctx.lineTo(cx, cy - 42);
        ctx.lineTo(cx - 26, cy - 16);
        ctx.lineTo(cx - headRx * 0.68, cy - 34);
        ctx.closePath();
      } else {
        ctx.moveTo(cx - headRx - 6, cy + 4);
        ctx.bezierCurveTo(cx - headRx - 10, cy - headRy - 28, cx + headRx + 10, cy - headRy - 28, cx + headRx + 6, cy + 4);
        ctx.quadraticCurveTo(cx + headRx * 0.52, cy - headRy * 0.42, cx + 14, cy - headRy * 0.28);
        ctx.quadraticCurveTo(cx - 14, cy - headRy * 0.48, cx - headRx * 0.56, cy - headRy * 0.24);
        ctx.closePath();
      }
    }

    drawStyleMediumOverlay(ctx, w, h, cx, cy, headRx, headRy, traits, style, pColor) {
      const rand = seededRandom(traits.seed ^ 0x9e3779b9);
      ctx.save();

      if (style === 'sketch') {
        // Energetic ink/graphite cross-hatching strokes
        const totalStrokes = Math.floor(95 * pColor);
        ctx.strokeStyle = 'rgba(42, 36, 30, 0.24)';
        ctx.lineWidth = 1.25;
        for (let i = 0; i < totalStrokes; i++) {
          const sx = 24 + rand() * (w - 48);
          const sy = 34 + rand() * (h - 104);
          const len = 18 + rand() * 36;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + len, sy - len * 0.72);
          ctx.stroke();
        }
      } else if (style === 'realistic') {
        // Fine Vietnamese Truyền thần charcoal shading + warm studio vignette
        const totalShades = Math.floor(70 * pColor);
        ctx.strokeStyle = 'rgba(58, 42, 28, 0.14)';
        ctx.lineWidth = 1;
        for (let i = 0; i < totalShades; i++) {
          const sx = 26 + rand() * (w - 52);
          const sy = 36 + rand() * (h - 100);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + 14, sy + 10);
          ctx.stroke();
        }
        const vig = ctx.createRadialGradient(w / 2, h * 0.44, 110, w / 2, h / 2, w * 0.74);
        vig.addColorStop(0, 'rgba(42, 28, 16, 0)');
        vig.addColorStop(1, `rgba(42, 28, 16, ${0.34 * pColor})`);
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, w, h);
      } else if (style === 'oil') {
        // Textured impasto brush dabs
        const totalDabs = Math.floor(95 * pColor);
        const palette = [traits.bgStart, traits.bgEnd, traits.shirtColor, '#f7d070', '#ffffff', traits.hairHi];
        for (let i = 0; i < totalDabs; i++) {
          const x = 18 + rand() * (w - 36);
          const y = 18 + rand() * (h - 60);
          const dist = Math.hypot((x - cx) / headRx, (y - cy) / headRy);
          if (dist < 0.78) continue;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((rand() - 0.5) * 1.1);
          ctx.fillStyle = palette[Math.floor(rand() * palette.length)];
          ctx.globalAlpha = 0.3 + rand() * 0.25;
          ctx.beginPath();
          ctx.roundRect(-14, -4, 28, 9, 4);
          ctx.fill();
          ctx.restore();
        }
      } else if (style === 'anime') {
        // Glowing anime sparkle stars
        const stars = Math.floor(15 * pColor);
        for (let i = 0; i < stars; i++) {
          const sx = 28 + rand() * (w - 56);
          const sy = 28 + rand() * (h - 100);
          if (Math.hypot(sx - cx, sy - cy) < headRx * 0.95) continue;
          this.drawFourPointStar(ctx, sx, sy, 6 + rand() * 8, i % 2 === 0 ? '#fff7c2' : '#7dd3fc');
        }
      } else if (style === 'caricature') {
        // Playful comic pop dots & exclamation sparks
        const items = Math.floor(11 * pColor);
        ctx.font = '800 20px "Baloo 2", sans-serif';
        ctx.textAlign = 'center';
        const symbols = ['★', '✦', '!', '♪'];
        const colors = ['#e63946', '#f4a261', '#2a9d8f', '#e9c46a'];
        for (let i = 0; i < items; i++) {
          const sx = 32 + rand() * (w - 64);
          const sy = 36 + rand() * (h - 120);
          if (Math.hypot(sx - cx, sy - cy) < headRx * 1.06) continue;
          ctx.globalAlpha = 0.78;
          ctx.fillStyle = colors[i % colors.length];
          ctx.fillText(symbols[i % symbols.length], sx, sy);
        }
      }

      ctx.restore();
    }

    drawFourPointStar(ctx, x, y, r, color) {
      ctx.save();
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.88;
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y);
      ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.fill();
      ctx.restore();
    }

    drawFinishingPhase(ctx, w, h, job, pFrame) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, pFrame * 1.3);

      ctx.strokeStyle = job.frame === 'royal' ? '#d99a1e' : job.frame === 'gold' ? '#c98e26' : '#8c5c34';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(12, 12, w - 24, h - 24);
      ctx.lineWidth = 1;
      ctx.strokeRect(18, 18, w - 36, h - 36);

      // Cinnabar red artist seal stamp "Ông Ba"
      const sx = w - 62;
      const sy = h - 78;
      ctx.fillStyle = '#c92f24';
      ctx.beginPath();
      ctx.roundRect(sx, sy, 36, 52, 5);
      ctx.fill();
      ctx.strokeStyle = '#ffdfd9';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(sx + 3, sy + 3, 30, 46);
      ctx.fillStyle = '#fff5f0';
      ctx.font = '800 12px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('ÔNG', sx + 18, sy + 22);
      ctx.fillText('BA', sx + 18, sy + 40);

      // Nameplate at bottom left
      const styleInfo = ART_STYLES[job.style] || ART_STYLES.caricature;
      ctx.fillStyle = 'rgba(38, 22, 12, 0.82)';
      ctx.beginPath();
      ctx.roundRect(24, h - 62, w - 98, 36, 8);
      ctx.fill();
      ctx.fillStyle = '#fff7e8';
      ctx.font = '700 14px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'left';
      const label = `${job.username} · ${styleInfo.label}`;
      ctx.fillText(label.slice(0, 30), 34, h - 39);

      ctx.restore();
    }

    drawActiveBrushTip(ctx, bx, by, style, traits) {
      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(-0.6);

      ctx.fillStyle = style === 'sketch' || style === 'realistic' ? '#3a352f' : traits.shirtColor;
      ctx.beginPath();
      ctx.arc(0, 0, 5.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#d9a15b';
      ctx.beginPath();
      ctx.moveTo(4, -3);
      ctx.lineTo(24, -7);
      ctx.lineTo(24, 7);
      ctx.lineTo(4, 3);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#75401d';
      ctx.fillRect(24, -6, 36, 12);
      ctx.restore();
    }

    captureSnapshot(job) {
      if (!this.canvas || !this.ctx) return `portrait://${job.id}`;
      this.renderPortrait(job, 1, 0);
      try {
        return this.canvas.toDataURL('image/png');
      } catch (_err) {
        return `portrait://${job.id}`;
      }
    }
  }

  /* =========================================================================
     5. ÔNG BA PAINTER CHARACTER CANVAS RENDERER
     ========================================================================= */
  class ArtistRenderer {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas ? canvas.getContext('2d') : null;
      this.waveUntil = 0;
    }

    triggerWave() {
      this.waveUntil = performance.now() + 2200;
    }

    render(timeSec, state) {
      const ctx = this.ctx;
      if (!ctx) return;
      const w = this.canvas.width;
      const h = this.canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isDrawing = state === 'drawing';
      const isCelebrating = state === 'celebrating';
      const isWaving = performance.now() < this.waveUntil;

      const bob = isDrawing
        ? Math.sin(timeSec * 4.2) * 2.5
        : isCelebrating
          ? Math.abs(Math.sin(timeSec * 8)) * -6
          : Math.sin(timeSec * 1.8) * 1.6;

      // Full-body standing figure centered slightly left so right painting arm reaches toward the center easel
      const cx = w * 0.44;
      const floorY = h - 14;
      const hipY = floorY - 82 + bob * 0.3;
      const torsoTopY = hipY - 94 + bob * 0.7;
      const headY = torsoTopY - 40 + bob;

      ctx.save();

      // 1. Floor shadow directly under standing shoes
      ctx.fillStyle = 'rgba(0, 0, 0, 0.36)';
      ctx.beginPath();
      ctx.ellipse(cx, floorY, 54, 11, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Standing Legs & Trousers (Full-body!)
      const legGap = 15;
      ctx.fillStyle = '#3b2c22';
      // Left leg
      ctx.beginPath();
      ctx.roundRect(cx - legGap - 11, hipY - 4, 22, floorY - hipY - 6, 8);
      // Right leg (slightly stepped forward toward easel)
      ctx.roundRect(cx + legGap - 9, hipY - 4, 22, floorY - hipY - 6, 8);
      ctx.fill();

      // Pant cuffs highlight
      ctx.strokeStyle = '#5a4334';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - legGap - 10, floorY - 14);
      ctx.lineTo(cx - legGap + 10, floorY - 14);
      ctx.moveTo(cx + legGap - 8, floorY - 14);
      ctx.lineTo(cx + legGap + 12, floorY - 14);
      ctx.stroke();

      // 3. Standing Shoes firmly on studio floor
      ctx.fillStyle = '#5c2e14';
      ctx.beginPath();
      ctx.ellipse(cx - legGap - 2, floorY - 5, 17, 9, 0, 0, Math.PI * 2);
      ctx.ellipse(cx + legGap + 6, floorY - 5, 18, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8b4a24';
      ctx.beginPath();
      ctx.ellipse(cx - legGap - 4, floorY - 7, 10, 4, 0, 0, Math.PI * 2);
      ctx.ellipse(cx + legGap + 8, floorY - 7, 11, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // 4. Torso (Cream Painter Shirt + Paint-Smudged Apron)
      ctx.fillStyle = '#f2e6cf';
      ctx.beginPath();
      ctx.roundRect(cx - 38, torsoTopY, 76, 98, 24);
      ctx.fill();

      // Apron covering torso down past hips
      ctx.fillStyle = '#734b2a';
      ctx.beginPath();
      ctx.roundRect(cx - 31, torsoTopY + 18, 62, 102, 14);
      ctx.fill();

      // Apron straps & waist tie
      ctx.strokeStyle = '#9c6c41';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(cx - 20, torsoTopY + 18);
      ctx.lineTo(cx - 16, torsoTopY);
      ctx.moveTo(cx + 20, torsoTopY + 18);
      ctx.lineTo(cx + 16, torsoTopY);
      ctx.moveTo(cx - 32, hipY - 10);
      ctx.lineTo(cx + 32, hipY - 10);
      ctx.stroke();

      // Apron pocket & colorful paint smudges
      ctx.fillStyle = '#5f3b1e';
      ctx.beginPath();
      ctx.roundRect(cx - 16, torsoTopY + 62, 32, 24, 6);
      ctx.fill();
      const smudges = [
        { x: -14, y: 40, c: '#e84c3d' },
        { x: 12, y: 50, c: '#f4c542' },
        { x: -6, y: 98, c: '#48a978' },
        { x: 16, y: 34, c: '#4c8ed9' }
      ];
      for (const s of smudges) {
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.ellipse(cx + s.x, torsoTopY + s.y, 6.5, 3.8, 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Left Arm holding Wooden Paint Palette (on left side)
      const palX = cx - 48;
      const palY = torsoTopY + 56 + Math.sin(timeSec * 2.5) * 2.5;
      ctx.strokeStyle = '#f2e6cf';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx - 32, torsoTopY + 22);
      ctx.quadraticCurveTo(cx - 50, torsoTopY + 42, palX + 6, palY + 2);
      ctx.stroke();

      ctx.fillStyle = '#c88d50';
      ctx.strokeStyle = '#6d411c';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(palX, palY, 24, 18, -0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Thumb hole
      ctx.fillStyle = '#3a2212';
      ctx.beginPath();
      ctx.arc(palX + 10, palY + 6, 3.5, 0, Math.PI * 2);
      ctx.fill();
      // 4 bright paint dabs on palette
      const dots = ['#e84c3d', '#f5c542', '#3f88d6', '#46b078'];
      dots.forEach((c, idx) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(palX - 11 + idx * 6.5, palY - 6 + (idx % 2) * 7, 3.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Neck & Head (Grandpa Painter Ông Ba with round glasses, white beard & burgundy beret)
      ctx.fillStyle = '#ecc29e';
      ctx.fillRect(cx - 11, torsoTopY - 12, 22, 18);

      // Ears
      ctx.beginPath();
      ctx.arc(cx - 34, headY + 2, 8, 0, Math.PI * 2);
      ctx.arc(cx + 34, headY + 2, 8, 0, Math.PI * 2);
      ctx.fill();

      // Head
      ctx.fillStyle = '#f4cca8';
      ctx.beginPath();
      ctx.ellipse(cx, headY, 34, 38, 0, 0, Math.PI * 2);
      ctx.fill();

      // Warm rosy cheeks
      ctx.fillStyle = 'rgba(235, 118, 104, 0.35)';
      ctx.beginPath();
      ctx.arc(cx - 18, headY + 9, 7, 0, Math.PI * 2);
      ctx.arc(cx + 18, headY + 9, 7, 0, Math.PI * 2);
      ctx.fill();

      // White side hair, beard & mustache
      ctx.fillStyle = '#f6f2eb';
      ctx.beginPath();
      ctx.arc(cx - 31, headY - 8, 9, 0, Math.PI * 2);
      ctx.arc(cx + 31, headY - 8, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx - 18, headY + 22);
      ctx.quadraticCurveTo(cx, headY + 48, cx + 18, headY + 22);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx - 10, headY + 15, 13, 6.5, -0.18, 0, Math.PI * 2);
      ctx.ellipse(cx + 10, headY + 15, 13, 6.5, 0.18, 0, Math.PI * 2);
      ctx.fill();

      // Smile
      ctx.strokeStyle = '#7a3b2c';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.arc(cx, headY + 19, 8, 0.15, Math.PI - 0.15);
      ctx.stroke();

      // Eyes (blinking) & White eyebrows
      const isBlink = Math.sin(timeSec * 1.55) > 0.96;
      for (const dir of [-1, 1]) {
        const ex = cx + dir * 13;
        const ey = headY - 2;
        ctx.strokeStyle = '#2a1a10';
        ctx.fillStyle = '#2a1a10';
        ctx.lineWidth = 2.3;
        if (isBlink || isCelebrating) {
          ctx.beginPath();
          ctx.arc(ex, ey + 2, 5, Math.PI, 0);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(ex, ey, 3.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.strokeStyle = '#f6f2eb';
        ctx.lineWidth = 3.4;
        ctx.beginPath();
        ctx.moveTo(ex - 7, ey - 10);
        ctx.lineTo(ex + 7, ey - 9);
        ctx.stroke();
      }

      // Round glasses
      ctx.strokeStyle = '#4e2f19';
      ctx.lineWidth = 2.3;
      ctx.beginPath();
      ctx.arc(cx - 13, headY - 1, 10.5, 0, Math.PI * 2);
      ctx.arc(cx + 13, headY - 1, 10.5, 0, Math.PI * 2);
      ctx.moveTo(cx - 2.5, headY - 1);
      ctx.lineTo(cx + 2.5, headY - 1);
      ctx.stroke();

      // Iconic burgundy beret hat
      ctx.fillStyle = '#9e2b25';
      ctx.beginPath();
      ctx.ellipse(cx - 3, headY - 32, 40, 17, 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#681915';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 4, headY - 48);
      ctx.lineTo(cx - 9, headY - 57);
      ctx.stroke();

      // 7. Right Painting Arm reaching RIGHT toward the center easel!
      const brushSwingY = isDrawing
        ? Math.sin(timeSec * 6.5) * 24
        : isCelebrating || isWaving
          ? -38 + Math.sin(timeSec * 12) * 12
          : Math.sin(timeSec * 2) * 5;
      const brushSwingX = isDrawing ? Math.cos(timeSec * 4.5) * 10 : 0;
      const handX = cx + 62 + brushSwingX;
      const handY = torsoTopY + 34 + brushSwingY;

      ctx.strokeStyle = '#f2e6cf';
      ctx.lineWidth = 15;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx + 34, torsoTopY + 24);
      ctx.quadraticCurveTo(cx + 50, torsoTopY + 42, handX, handY);
      ctx.stroke();

      // Right Hand
      ctx.fillStyle = '#f4cca8';
      ctx.beginPath();
      ctx.arc(handX, handY, 9.5, 0, Math.PI * 2);
      ctx.fill();

      // Paintbrush pointing RIGHT toward the canvas on the center easel
      ctx.save();
      ctx.translate(handX, handY);
      ctx.rotate(isDrawing ? -0.35 + Math.sin(timeSec * 7) * 0.22 : -0.65);
      ctx.fillStyle = '#8b4e24';
      ctx.fillRect(-10, -2.8, 44, 5.6);
      ctx.fillStyle = '#d4d8dd';
      ctx.fillRect(34, -3.2, 8, 6.4);
      ctx.fillStyle = '#f4c542';
      ctx.beginPath();
      ctx.moveTo(42, -3.2);
      ctx.lineTo(54, 0);
      ctx.lineTo(42, 3.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.restore();
    }
  }

  /* =========================================================================
     6. CONFETTI FX
     ========================================================================= */
  class ConfettiFX {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas ? canvas.getContext('2d') : null;
      this.particles = [];
    }

    burst() {
      if (!this.canvas) return;
      const colors = ['#ffe066', '#ff6b6b', '#51cf66', '#4dabf7', '#ffa94d', '#fff3bf'];
      for (let i = 0; i < 88; i++) {
        this.particles.push({
          x: this.canvas.width * (0.2 + Math.random() * 0.6),
          y: this.canvas.height * 0.35,
          vx: (Math.random() - 0.5) * 340,
          vy: -160 - Math.random() * 280,
          size: 6 + Math.random() * 7,
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 9,
          color: colors[i % colors.length],
          life: 1
        });
      }
    }

    updateAndDraw(dtSec) {
      const ctx = this.ctx;
      if (!ctx) return;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.vy += 420 * dtSec;
        p.x += p.vx * dtSec;
        p.y += p.vy * dtSec;
        p.rot += p.vrot * dtSec;
        p.life -= dtSec * 0.32;
        if (p.life <= 0 || p.y > this.canvas.height + 20) {
          this.particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }
    }
  }

  /* =========================================================================
     7. WEB AUDIO ORIGINAL STUDIO BGM & SFX
     ========================================================================= */
  class StudioBGM {
    constructor() {
      this.ctx = null;
      this.masterGain = null;
      this.enabled = true;
      this.volume = 0.42;
      this.timer = null;
      this.step = 0;
    }

    init() {
      if (this.ctx || typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      try {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.enabled ? this.volume * 0.25 : 0;
        this.masterGain.connect(this.ctx.destination);
      } catch (_err) {
        this.ctx = null;
      }
    }

    start() {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (this.timer) return;
      const chords = [
        [261.63, 329.63, 392.0, 493.88],
        [220.0, 261.63, 329.63, 392.0],
        [174.61, 220.0, 261.63, 329.63],
        [196.0, 246.94, 293.66, 392.0]
      ];
      const melody = [523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 440.0];

      this.timer = setInterval(() => {
        if (!this.enabled || !this.ctx || this.ctx.state !== 'running') return;
        const now = this.ctx.currentTime;
        const beat = this.step % 8;

        if (beat === 0 || beat === 4) {
          const chord = chords[Math.floor(this.step / 4) % chords.length];
          chord.forEach((freq, idx) => {
            this.playTone(freq, now + idx * 0.03, 1.45, 'triangle', 0.14);
          });
        }

        if (beat % 2 === 0 || beat === 5) {
          const note = melody[(this.step + Math.floor(this.step / 8)) % melody.length];
          this.playTone(note, now, 0.52, 'sine', 0.11);
        }

        this.step++;
      }, 420);
    }

    playTone(freq, startTime, duration, type = 'sine', peak = 0.12) {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.linearRampToValueAtTime(peak, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.03);
    }

    playCompleteFanfare() {
      this.init();
      if (!this.enabled || !this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        this.playTone(f, now + idx * 0.09, 0.45, 'triangle', 0.24);
      });
    }

    playVipSparkle() {
      this.init();
      if (!this.enabled || !this.ctx) return;
      const now = this.ctx.currentTime;
      [587.33, 739.99, 880.0, 1174.66, 1318.5].forEach((f, idx) => {
        this.playTone(f, now + idx * 0.06, 0.35, 'sine', 0.2);
      });
    }

    setEnabled(val) {
      this.enabled = Boolean(val);
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setTargetAtTime(this.enabled ? this.volume * 0.25 : 0, this.ctx.currentTime, 0.06);
      }
    }

    setVolume(pct) {
      this.volume = Math.max(0, Math.min(1, Number(pct) / 100));
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setTargetAtTime(this.enabled ? this.volume * 0.25 : 0, this.ctx.currentTime, 0.06);
      }
    }
  }

  /* =========================================================================
     8. VIETNAMESE TTS MC (vi-VN Default ON, Replay + Key S)
     ========================================================================= */
  class VoiceMC {
    constructor(onTextUpdate) {
      this.enabled = true;
      this.onTextUpdate = onTextUpdate || (() => {});
      this.lastLine = 'Chào các cháu đến Phòng Tranh Ông Ba! Tặng món quà bất kỳ để Ông vẽ chân dung theo đúng phong cách của món quà nhé!';
      this.lastHeartSpeakAt = 0;
      this.voice = null;
      this.loadVoice();
    }

    loadVoice() {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      const pick = () => {
        const voices = window.speechSynthesis.getVoices() || [];
        this.voice =
          voices.find((v) => /vi[-_]?VN/i.test(v.lang)) ||
          voices.find((v) => /^vi/i.test(v.lang)) ||
          null;
      };
      pick();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = pick;
      }
    }

    speak(text, { priority = false, isHeart = false, updateBubble = true } = {}) {
      if (!text) return;
      if (isHeart) {
        const now = Date.now();
        if (now - this.lastHeartSpeakAt < 4500) {
          return;
        }
        this.lastHeartSpeakAt = now;
      }

      if (updateBubble) {
        this.lastLine = text;
        this.onTextUpdate(text);
      }

      if (!this.enabled || typeof window === 'undefined' || !window.speechSynthesis) return;
      try {
        if (priority) {
          window.speechSynthesis.cancel();
        }
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'vi-VN';
        utter.rate = 1.03;
        utter.pitch = 1.02;
        if (this.voice) utter.voice = this.voice;
        window.speechSynthesis.speak(utter);
      } catch (_err) {}
    }

    replay() {
      this.speak(this.lastLine, { priority: true });
    }

    setEnabled(val) {
      this.enabled = Boolean(val);
      if (!this.enabled && typeof window !== 'undefined' && window.speechSynthesis) {
        try {
          window.speechSynthesis.cancel();
        } catch (_err) {}
      }
    }
  }

  /* =========================================================================
     9. DEMO BOT (Gifts across all 5 styles, 1/5/10+ tiers, comments & hearts)
     ========================================================================= */
  class DemoBot {
    constructor(engine) {
      this.engine = engine;
      this.timer = null;
      this.step = 0;
      this.users = [
        'Minh Anh', 'Hoàng Nam', 'Linh Chi', 'Tuấn Kiệt', 'Thảo Vy',
        'Gia Bảo', 'Ngọc Hân', 'Quốc Anh', 'Phương Nhi', 'Đức Huy',
        'Khánh Linh', 'Bảo Trâm'
      ];
    }

    start() {
      if (this.timer) return;
      // Opening sequence showcasing distinct gifts & styles immediately
      this.engine.handleGift({ username: 'Minh Anh', giftId: 5655, count: 1 }); // Hoa hồng 1💎 -> Biếm họa + Khung Gỗ
      this.engine.handleGift({ username: 'Hoàng Nam', giftId: 5487, count: 1 }); // Tim ngón tay 5💎 -> Truyền thần + Khung Vàng
      this.engine.handleGift({ username: 'Linh Chi', giftId: 5657, count: 1 }); // Kẹo mút 10💎 -> Anime + Khung Hoàng Gia + VIP 10s
      this.engine.handleComment({ username: 'Tuấn Kiệt', text: 'Ông Ba vẽ có tâm ghê, đẹp xuất sắc luôn!' });

      this.timer = setInterval(() => {
        if (this.engine.paused || !this.engine.running) return;
        this.step++;
        const user = this.users[this.step % this.users.length];
        const r = Math.random();

        if (this.step % 6 === 0) {
          // Big gift >=10💎 (with repeats for +10s stacking)
