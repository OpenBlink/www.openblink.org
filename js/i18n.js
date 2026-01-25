const translations = {
  en: {
    "nav.about": "About",
    "nav.features": "Features",
    "nav.tools": "Tools",
    "nav.repositories": "Repositories",
    "hero.subtitle": "A new way to develop embedded systems",
    "hero.description": "Update your embedded programs in under 0.1 seconds via Bluetooth, without restarting the device.",
    "hero.getStarted": "Get Started",
    "hero.viewGitHub": "View on GitHub",
    "about.title": "What is OpenBlink?",
    "about.description1": "OpenBlink is an open-source project that revolutionizes embedded systems development. Using mruby/c, a lightweight Ruby implementation for microcontrollers, you can write and update programs on embedded devices wirelessly via Bluetooth Low Energy (BLE).",
    "about.description2": "The name \"Blink\" represents the speed of updates - your code changes are reflected on the device in the blink of an eye, in under 0.1 seconds, without requiring a device restart.",
    "about.highlight1.title": "Lightning Fast",
    "about.highlight1.desc": "Program updates in under 0.1 seconds",
    "about.highlight2.title": "Wireless",
    "about.highlight2.desc": "Update via Bluetooth Low Energy",
    "about.highlight3.title": "No Restart",
    "about.highlight3.desc": "Device keeps running during updates",
    "features.title": "Key Features",
    "features.ruby.title": "Ruby for Embedded",
    "features.ruby.desc": "Use Ruby, a highly productive language, for embedded development through mruby/c - a lightweight Ruby implementation designed for microcontrollers with limited resources (RAM as low as tens of KB).",
    "features.webide.title": "Browser-Based IDE",
    "features.webide.desc": "OpenBlink WebIDE runs entirely in your browser using WebBluetooth and WebAssembly. No installation required - works on Windows, macOS, ChromeOS, and Linux.",
    "features.workflow.title": "Build & Blink",
    "features.workflow.desc": "One-click workflow: compile your Ruby code, transfer it via BLE, and execute on the device - all with a single \"Run\" button.",
    "features.prototyping.title": "Thought-Speed Prototyping",
    "features.prototyping.desc": "Edit your code and see changes immediately on real hardware. Perfect for rapid iteration and experimentation.",
    "features.diy.title": "DIY-able Value",
    "features.diy.desc": "End users can create and run their own programs on their devices, enabling customization and creative applications.",
    "features.opensource.title": "Open Source",
    "features.opensource.desc": "Fully open source under BSD-3-Clause license. Contribute, customize, and integrate into your own projects.",
    "tools.title": "Development Tools",
    "tools.vscode.title": "VSCode Extension",
    "tools.vscode.desc": "For the best development experience, use our VSCode extension with full IDE features.",
    "tools.vscode.marketplace": "VS Code Marketplace",
    "tools.vscode.openvsx": "OpenVSX",
    "tools.webide.title": "WebIDE",
    "tools.webide.desc": "Try OpenBlink directly in your browser. No installation required.",
    "tools.webide.canary": "Canary (Experimental)",
    "tools.webide.stable": "0.3.4 (Stable)",
    "tools.webide.legacy": "0.3.3 (Legacy)",
    "tools.webide.canary.title": "Canary Build",
    "tools.webide.canary.desc": "Latest experimental features. May be unstable.",
    "tools.webide.stable.title": "Version 0.3.4",
    "tools.webide.stable.desc": "Current stable release with WebSimulator support.",
    "tools.webide.legacy.title": "Version 0.3.3",
    "tools.webide.legacy.desc": "Previous stable release for backwards compatibility.",
    "tools.webide.launch": "Launch WebIDE",
    "repos.title": "Source Code",
    "repos.description": "OpenBlink is fully open source. Explore our repositories on GitHub.",
    "repos.openblink": "Core system for Nordic nRF54L15-DK and nRF52840-DK (C language)",
    "repos.webide": "Browser-based development environment (JavaScript, WebAssembly)",
    "repos.vscode": "VSCode extension for OpenBlink development",
    "repos.m5": "Demo implementation for M5Stack M5StampS3 (ESP32-S3)",
    "repos.mdbt50q": "Demo implementation for Raytac MDBT50Q-DB-40 BLE module",
    "history.title": "Project History",
    "history.2024.03.title": "Development Started",
    "history.2024.03.desc": "Project began as a personal initiative to revolutionize embedded development.",
    "history.2024.06.title": "First LED Blink",
    "history.2024.06.desc": "Successfully achieved LED control using mruby/c on Nordic nRF52832.",
    "history.2025.03.title": "OpenBlink Released",
    "history.2025.03.desc": "Released as an open-source project on GitHub.",
    "footer.since": "Since 2025.03.06",
    "footer.github": "GitHub"
  },
  zh: {
    "nav.about": "关于",
    "nav.features": "特性",
    "nav.tools": "工具",
    "nav.repositories": "代码仓库",
    "hero.subtitle": "嵌入式系统开发的新方式",
    "hero.description": "通过蓝牙在0.1秒内更新嵌入式程序，无需重启设备。",
    "hero.getStarted": "开始使用",
    "hero.viewGitHub": "在GitHub上查看",
    "about.title": "什么是OpenBlink？",
    "about.description1": "OpenBlink是一个革新嵌入式系统开发的开源项目。使用mruby/c（一种为微控制器设计的轻量级Ruby实现），您可以通过蓝牙低功耗（BLE）无线编写和更新嵌入式设备上的程序。",
    "about.description2": "\"Blink\"这个名字代表更新的速度——您的代码更改会在眨眼间（不到0.1秒）反映到设备上，无需重启设备。",
    "about.highlight1.title": "闪电般快速",
    "about.highlight1.desc": "程序更新不到0.1秒",
    "about.highlight2.title": "无线连接",
    "about.highlight2.desc": "通过蓝牙低功耗更新",
    "about.highlight3.title": "无需重启",
    "about.highlight3.desc": "更新期间设备持续运行",
    "features.title": "主要特性",
    "features.ruby.title": "嵌入式Ruby",
    "features.ruby.desc": "通过mruby/c使用高效的Ruby语言进行嵌入式开发——这是一种专为资源有限的微控制器（RAM低至数十KB）设计的轻量级Ruby实现。",
    "features.webide.title": "基于浏览器的IDE",
    "features.webide.desc": "OpenBlink WebIDE完全在浏览器中运行，使用WebBluetooth和WebAssembly。无需安装——可在Windows、macOS、ChromeOS和Linux上运行。",
    "features.workflow.title": "构建与闪烁",
    "features.workflow.desc": "一键工作流：编译Ruby代码，通过BLE传输，并在设备上执行——只需一个\"运行\"按钮。",
    "features.prototyping.title": "思维速度原型设计",
    "features.prototyping.desc": "编辑代码并立即在真实硬件上看到变化。非常适合快速迭代和实验。",
    "features.diy.title": "DIY价值",
    "features.diy.desc": "最终用户可以在自己的设备上创建和运行自己的程序，实现定制和创意应用。",
    "features.opensource.title": "开源",
    "features.opensource.desc": "完全开源，采用BSD-3-Clause许可证。贡献、定制并集成到您自己的项目中。",
    "tools.title": "开发工具",
    "tools.vscode.title": "VSCode扩展",
    "tools.vscode.desc": "为获得最佳开发体验，请使用我们具有完整IDE功能的VSCode扩展。",
    "tools.vscode.marketplace": "VS Code市场",
    "tools.vscode.openvsx": "OpenVSX",
    "tools.webide.title": "WebIDE",
    "tools.webide.desc": "直接在浏览器中试用OpenBlink。无需安装。",
    "tools.webide.canary": "Canary（实验性）",
    "tools.webide.stable": "0.3.4（稳定版）",
    "tools.webide.legacy": "0.3.3（旧版）",
    "tools.webide.canary.title": "Canary版本",
    "tools.webide.canary.desc": "最新实验性功能。可能不稳定。",
    "tools.webide.stable.title": "版本0.3.4",
    "tools.webide.stable.desc": "当前稳定版本，支持WebSimulator。",
    "tools.webide.legacy.title": "版本0.3.3",
    "tools.webide.legacy.desc": "为向后兼容保留的旧稳定版本。",
    "tools.webide.launch": "启动WebIDE",
    "repos.title": "源代码",
    "repos.description": "OpenBlink完全开源。在GitHub上探索我们的代码仓库。",
    "repos.openblink": "Nordic nRF54L15-DK和nRF52840-DK的核心系统（C语言）",
    "repos.webide": "基于浏览器的开发环境（JavaScript、WebAssembly）",
    "repos.vscode": "OpenBlink开发的VSCode扩展",
    "repos.m5": "M5Stack M5StampS3（ESP32-S3）的演示实现",
    "repos.mdbt50q": "Raytac MDBT50Q-DB-40 BLE模块的演示实现",
    "history.title": "项目历史",
    "history.2024.03.title": "开发启动",
    "history.2024.03.desc": "项目作为个人倡议开始，旨在革新嵌入式开发。",
    "history.2024.06.title": "首次LED闪烁",
    "history.2024.06.desc": "成功在Nordic nRF52832上使用mruby/c实现LED控制。",
    "history.2025.03.title": "OpenBlink发布",
    "history.2025.03.desc": "作为开源项目在GitHub上发布。",
    "footer.since": "始于2025.03.06",
    "footer.github": "GitHub"
  },
  ja: {
    "nav.about": "概要",
    "nav.features": "特徴",
    "nav.tools": "ツール",
    "nav.repositories": "リポジトリ",
    "hero.subtitle": "組み込み開発の新しいカタチ",
    "hero.description": "Bluetooth経由で0.1秒以内にプログラムを更新。デバイスの再起動は不要です。",
    "hero.getStarted": "はじめる",
    "hero.viewGitHub": "GitHubで見る",
    "about.title": "OpenBlinkとは？",
    "about.description1": "OpenBlinkは、組み込みシステム開発を革新するオープンソースプロジェクトです。マイコン向けの軽量Ruby実装であるmruby/cを使用して、Bluetooth Low Energy（BLE）経由でワイヤレスに組み込みデバイスのプログラムを作成・更新できます。",
    "about.description2": "「Blink」という名前は更新の速さを表しています。コードの変更は瞬く間に（0.1秒以内に）デバイスに反映され、再起動は必要ありません。",
    "about.highlight1.title": "超高速",
    "about.highlight1.desc": "0.1秒以内でプログラム更新",
    "about.highlight2.title": "ワイヤレス",
    "about.highlight2.desc": "Bluetooth Low Energyで更新",
    "about.highlight3.title": "再起動不要",
    "about.highlight3.desc": "更新中もデバイスは動作継続",
    "features.title": "主な特徴",
    "features.ruby.title": "組み込みでRuby",
    "features.ruby.desc": "mruby/cを通じて、生産性の高いRuby言語で組み込み開発が可能です。mruby/cは、限られたリソース（RAM数十KB〜）のマイコン向けに設計された軽量Ruby実装です。",
    "features.webide.title": "ブラウザベースIDE",
    "features.webide.desc": "OpenBlink WebIDEはWebBluetoothとWebAssemblyを使用してブラウザ上で完全に動作します。インストール不要で、Windows、macOS、ChromeOS、Linuxで動作します。",
    "features.workflow.title": "Build & Blink",
    "features.workflow.desc": "ワンクリックワークフロー：Rubyコードのコンパイル、BLE経由での転送、デバイスでの実行を「Run」ボタン一つで実行。",
    "features.prototyping.title": "思考速度プロトタイピング",
    "features.prototyping.desc": "コードを編集すると、すぐに実機で変化を確認できます。高速な試行錯誤と実験に最適です。",
    "features.diy.title": "DIYできる価値",
    "features.diy.desc": "エンドユーザーが自分のデバイスで自作プログラムを実行でき、カスタマイズや創造的な活用が可能になります。",
    "features.opensource.title": "オープンソース",
    "features.opensource.desc": "BSD-3-Clauseライセンスで完全オープンソース。貢献、カスタマイズ、自分のプロジェクトへの統合が可能です。",
    "tools.title": "開発ツール",
    "tools.vscode.title": "VSCode拡張機能",
    "tools.vscode.desc": "最高の開発体験のために、フル機能のVSCode拡張機能をご利用ください。",
    "tools.vscode.marketplace": "VS Code Marketplace",
    "tools.vscode.openvsx": "OpenVSX",
    "tools.webide.title": "WebIDE",
    "tools.webide.desc": "ブラウザで直接OpenBlinkを試せます。インストール不要。",
    "tools.webide.canary": "Canary（実験的）",
    "tools.webide.stable": "0.3.4（安定版）",
    "tools.webide.legacy": "0.3.3（旧版）",
    "tools.webide.canary.title": "Canaryビルド",
    "tools.webide.canary.desc": "最新の実験的機能。不安定な場合があります。",
    "tools.webide.stable.title": "バージョン0.3.4",
    "tools.webide.stable.desc": "WebSimulator対応の現行安定版。",
    "tools.webide.legacy.title": "バージョン0.3.3",
    "tools.webide.legacy.desc": "後方互換性のための旧安定版。",
    "tools.webide.launch": "WebIDEを起動",
    "repos.title": "ソースコード",
    "repos.description": "OpenBlinkは完全オープンソースです。GitHubでリポジトリをご覧ください。",
    "repos.openblink": "Nordic nRF54L15-DK、nRF52840-DK向けコアシステム（C言語）",
    "repos.webide": "ブラウザベース開発環境（JavaScript、WebAssembly）",
    "repos.vscode": "OpenBlink開発用VSCode拡張機能",
    "repos.m5": "M5Stack M5StampS3（ESP32-S3）向けデモ実装",
    "repos.mdbt50q": "Raytac MDBT50Q-DB-40 BLEモジュール向けデモ実装",
    "history.title": "プロジェクト沿革",
    "history.2024.03.title": "開発開始",
    "history.2024.03.desc": "組み込み開発を革新する個人プロジェクトとして開始。",
    "history.2024.06.title": "初のLED点滅",
    "history.2024.06.desc": "Nordic nRF52832上でmruby/cを使用したLED制御に成功。",
    "history.2025.03.title": "OpenBlink公開",
    "history.2025.03.desc": "GitHubでオープンソースプロジェクトとして公開。",
    "footer.since": "Since 2025.03.06",
    "footer.github": "GitHub"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('openblink-lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function initI18n() {
  const savedLang = localStorage.getItem('openblink-lang');
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = savedLang || (translations[browserLang] ? browserLang : 'en');
  
  setLanguage(defaultLang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
