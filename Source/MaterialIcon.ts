import EmpatiElement, {
  CustomElement,
  html,
  Property,
  Properties
} from "./EmpatiElement";

export enum Icons {
  ThreeDRotation = "3d_rotation",
  Accessibility = "accessibility",
  AccessibilityNew = "accessibility_new",
  Accessible = "accessible",
  AccessibleForward = "accessible_forward",
  AccountBalance = "account_balance",
  AccountBalanceWallet = "account_balance_wallet",
  AccountBox = "account_box",
  AccountCircle = "account_circle",
  AddShoppingCart = "add_shopping_cart",
  Alarm = "alarm",
  AlarmAdd = "alarm_add",
  AlarmOff = "alarm_off",
  AlarmOn = "alarm_on",
  AllInbox = "all_inbox",
  AllOut = "all_out",
  Android = "android",
  Announcement = "announcement",
  ArrowRightAlt = "arrow_right_alt",
  AspectRatio = "aspect_ratio",
  Assessment = "assessment",
  Assignment = "assignment",
  AssignmentInd = "assignment_ind",
  AssignmentLate = "assignment_late",
  AssignmentReturn = "assignment_return",
  AssignmentReturned = "assignment_returned",
  AssignmentTurnedIn = "assignment_turned_in",
  Autorenew = "autorenew",
  Backup = "backup",
  Book = "book",
  Bookmark = "bookmark",
  BookmarkBorder = "bookmark_border",
  Bookmarks = "bookmarks",
  BugReport = "bug_report",
  Build = "build",
  Cached = "cached",
  CalendarToday = "calendar_today",
  CalendarViewDay = "calendar_view_day",
  CameraEnhance = "camera_enhance",
  CardGiftcard = "card_giftcard",
  CardMembership = "card_membership",
  CardTravel = "card_travel",
  ChangeHistory = "change_history",
  CheckCircle = "check_circle",
  CheckCircleOutline = "check_circle_outline",
  ChromeReaderMode = "chrome_reader_mode",
  Class = "class",
  Code = "code",
  Commute = "commute",
  CompareArrows = "compare_arrows",
  ContactSupport = "contact_support",
  Copyright = "copyright",
  CreditCard = "credit_card",
  Dashboard = "dashboard",
  DateRange = "date_range",
  Delete = "delete",
  DeleteForever = "delete_forever",
  DeleteOutline = "delete_outline",
  Description = "description",
  Dns = "dns",
  Done = "done",
  DoneAll = "done_all",
  DoneOutline = "done_outline",
  DonutLarge = "donut_large",
  DonutSmall = "donut_small",
  DragIndicator = "drag_indicator",
  Eject = "eject",
  EuroSymbol = "euro_symbol",
  Event = "event",
  EventSeat = "event_seat",
  ExitToApp = "exit_to_app",
  Explore = "explore",
  ExploreOff = "explore_off",
  Extension = "extension",
  Face = "face",
  Favorite = "favorite",
  FavoriteBorder = "favorite_border",
  Feedback = "feedback",
  FindInPage = "find_in_page",
  FindReplace = "find_replace",
  Fingerprint = "fingerprint",
  FlightLand = "flight_land",
  FlightTakeoff = "flight_takeoff",
  FlipToBack = "flip_to_back",
  FlipToFront = "flip_to_front",
  GTranslate = "g_translate",
  Gavel = "gavel",
  GetApp = "get_app",
  Gif = "gif",
  Grade = "grade",
  GroupWork = "group_work",
  Help = "help",
  HelpOutline = "help_outline",
  HighlightOff = "highlight_off",
  History = "history",
  Home = "home",
  HorizontalSplit = "horizontal_split",
  HourglassEmpty = "hourglass_empty",
  HourglassFull = "hourglass_full",
  Http = "http",
  Https = "https",
  ImportantDevices = "important_devices",
  Info = "info",
  Input = "input",
  InvertColors = "invert_colors",
  Label = "label",
  LabelImportant = "label_important",
  LabelOff = "label_off",
  Language = "language",
  Launch = "launch",
  LineStyle = "line_style",
  LineWeight = "line_weight",
  List = "list",
  Lock = "lock",
  LockOpen = "lock_open",
  Loyalty = "loyalty",
  MarkunreadMailbox = "markunread_mailbox",
  Maximize = "maximize",
  Minimize = "minimize",
  Motorcycle = "motorcycle",
  NoteAdd = "note_add",
  OfflineBolt = "offline_bolt",
  OfflinePin = "offline_pin",
  Opacity = "opacity",
  OpenInBrowser = "open_in_browser",
  OpenInNew = "open_in_new",
  OpenWith = "open_with",
  Pageview = "pageview",
  PanTool = "pan_tool",
  Payment = "payment",
  PermCameraMic = "perm_camera_mic",
  PermContactCalendar = "perm_contact_calendar",
  PermDataSetting = "perm_data_setting",
  PermDeviceInformation = "perm_device_information",
  PermIdentity = "perm_identity",
  PermMedia = "perm_media",
  PermPhoneMsg = "perm_phone_msg",
  PermScanWifi = "perm_scan_wifi",
  Pets = "pets",
  PictureInPicture = "picture_in_picture",
  PictureInPictureAlt = "picture_in_picture_alt",
  PlayForWork = "play_for_work",
  Polymer = "polymer",
  PowerSettingsNew = "power_settings_new",
  PregnantWoman = "pregnant_woman",
  Print = "print",
  QueryBuilder = "query_builder",
  QuestionAnswer = "question_answer",
  Receipt = "receipt",
  RecordVoiceOver = "record_voice_over",
  Redeem = "redeem",
  RemoveShoppingCart = "remove_shopping_cart",
  Reorder = "reorder",
  ReportProblem = "report_problem",
  Restore = "restore",
  RestoreFromTrash = "restore_from_trash",
  RestorePage = "restore_page",
  Room = "room",
  RoundedCorner = "rounded_corner",
  Rowing = "rowing",
  Schedule = "schedule",
  Search = "search",
  Settings = "settings",
  SettingsApplications = "settings_applications",
  SettingsBackupRestore = "settings_backup_restore",
  SettingsBluetooth = "settings_bluetooth",
  SettingsBrightness = "settings_brightness",
  SettingsCell = "settings_cell",
  SettingsEthernet = "settings_ethernet",
  SettingsInputAntenna = "settings_input_antenna",
  SettingsInputComponent = "settings_input_component",
  SettingsInputComposite = "settings_input_composite",
  SettingsInputHdmi = "settings_input_hdmi",
  SettingsInputSvideo = "settings_input_svideo",
  SettingsOverscan = "settings_overscan",
  SettingsPhone = "settings_phone",
  SettingsPower = "settings_power",
  SettingsRemote = "settings_remote",
  SettingsVoice = "settings_voice",
  Shop = "shop",
  ShopTwo = "shop_two",
  ShoppingBasket = "shopping_basket",
  ShoppingCart = "shopping_cart",
  SpeakerNotes = "speaker_notes",
  SpeakerNotesOff = "speaker_notes_off",
  Spellcheck = "spellcheck",
  StarRate = "star_rate",
  Stars = "stars",
  Store = "store",
  Subject = "subject",
  SupervisedUserCircle = "supervised_user_circle",
  SupervisorAccount = "supervisor_account",
  SwapHoriz = "swap_horiz",
  SwapHorizontalCircle = "swap_horizontal_circle",
  SwapVert = "swap_vert",
  SwapVerticalCircle = "swap_vertical_circle",
  Tab = "tab",
  TabUnselected = "tab_unselected",
  TextRotateUp = "text_rotate_up",
  TextRotateVertical = "text_rotate_vertical",
  TextRotationDown = "text_rotation_down",
  TextRotationNone = "text_rotation_none",
  Theaters = "theaters",
  ThumbDown = "thumb_down",
  ThumbUp = "thumb_up",
  ThumbsUpDown = "thumbs_up_down",
  Timeline = "timeline",
  Toc = "toc",
  Today = "today",
  Toll = "toll",
  TouchApp = "touch_app",
  TrackChanges = "track_changes",
  Translate = "translate",
  TrendingDown = "trending_down",
  TrendingFlat = "trending_flat",
  TrendingUp = "trending_up",
  TurnedIn = "turned_in",
  TurnedInNot = "turned_in_not",
  Update = "update",
  VerifiedUser = "verified_user",
  VerticalSplit = "vertical_split",
  ViewAgenda = "view_agenda",
  ViewArray = "view_array",
  ViewCarousel = "view_carousel",
  ViewColumn = "view_column",
  ViewDay = "view_day",
  ViewHeadline = "view_headline",
  ViewList = "view_list",
  ViewModule = "view_module",
  ViewQuilt = "view_quilt",
  ViewStream = "view_stream",
  ViewWeek = "view_week",
  Visibility = "visibility",
  VisibilityOff = "visibility_off",
  VoiceOverOff = "voice_over_off",
  WatchLater = "watch_later",
  Work = "work",
  WorkOff = "work_off",
  WorkOutline = "work_outline",
  YoutubeSearchedFor = "youtube_searched_for",
  ZoomIn = "zoom_in",
  ZoomOut = "zoom_out",
  AddAlert = "add_alert",
  Error = "error",
  ErrorOutline = "error_outline",
  NotificationImportant = "notification_important",
  Warning = "warning",
  FourK = "4k",
  AddToQueue = "add_to_queue",
  Airplay = "airplay",
  Album = "album",
  ArtTrack = "art_track",
  AvTimer = "av_timer",
  BrandingWatermark = "branding_watermark",
  CallToAction = "call_to_action",
  ClosedCaption = "closed_caption",
  ControlCamera = "control_camera",
  Equalizer = "equalizer",
  Explicit = "explicit",
  FastForward = "fast_forward",
  FastRewind = "fast_rewind",
  FeaturedPlayList = "featured_play_list",
  FeaturedVideo = "featured_video",
  FiberDvr = "fiber_dvr",
  FiberManualRecord = "fiber_manual_record",
  FiberNew = "fiber_new",
  FiberPin = "fiber_pin",
  FiberSmartRecord = "fiber_smart_record",
  Forward10 = "forward_10",
  Forward30 = "forward_30",
  Forward5 = "forward_5",
  Games = "games",
  Hd = "hd",
  Hearing = "hearing",
  HighQuality = "high_quality",
  LibraryAdd = "library_add",
  LibraryBooks = "library_books",
  LibraryMusic = "library_music",
  Loop = "loop",
  Mic = "mic",
  MicNone = "mic_none",
  MicOff = "mic_off",
  MissedVideoCall = "missed_video_call",
  Movie = "movie",
  MusicVideo = "music_video",
  NewReleases = "new_releases",
  NotInterested = "not_interested",
  Note = "note",
  Pause = "pause",
  PauseCircleFilled = "pause_circle_filled",
  PauseCircleOutline = "pause_circle_outline",
  PlayArrow = "play_arrow",
  PlayCircleFilled = "play_circle_filled",
  PlayCircleFilledWhite = "play_circle_filled_white",
  PlayCircleOutline = "play_circle_outline",
  PlaylistAdd = "playlist_add",
  PlaylistAddCheck = "playlist_add_check",
  PlaylistPlay = "playlist_play",
  Queue = "queue",
  QueueMusic = "queue_music",
  QueuePlayNext = "queue_play_next",
  Radio = "radio",
  RecentActors = "recent_actors",
  RemoveFromQueue = "remove_from_queue",
  Repeat = "repeat",
  RepeatOne = "repeat_one",
  Replay = "replay",
  Replay10 = "replay_10",
  Replay30 = "replay_30",
  Replay5 = "replay_5",
  Shuffle = "shuffle",
  SkipNext = "skip_next",
  SkipPrevious = "skip_previous",
  SlowMotionVideo = "slow_motion_video",
  Snooze = "snooze",
  SortByAlpha = "sort_by_alpha",
  Stop = "stop",
  Subscriptions = "subscriptions",
  Subtitles = "subtitles",
  SurroundSound = "surround_sound",
  VideoCall = "video_call",
  VideoLabel = "video_label",
  VideoLibrary = "video_library",
  Videocam = "videocam",
  VideocamOff = "videocam_off",
  VolumeDown = "volume_down",
  VolumeMute = "volume_mute",
  VolumeOff = "volume_off",
  VolumeUp = "volume_up",
  Web = "web",
  WebAsset = "web_asset",
  AlternateEmail = "alternate_email",
  Business = "business",
  Call = "call",
  CallEnd = "call_end",
  CallMade = "call_made",
  CallMerge = "call_merge",
  CallMissed = "call_missed",
  CallMissedOutgoing = "call_missed_outgoing",
  CallReceived = "call_received",
  CallSplit = "call_split",
  CancelPresentation = "cancel_presentation",
  CellWifi = "cell_wifi",
  Chat = "chat",
  ChatBubble = "chat_bubble",
  ChatBubbleOutline = "chat_bubble_outline",
  ClearAll = "clear_all",
  Comment = "comment",
  ContactMail = "contact_mail",
  ContactPhone = "contact_phone",
  Contacts = "contacts",
  DesktopAccessDisabled = "desktop_access_disabled",
  DialerSip = "dialer_sip",
  Dialpad = "dialpad",
  DomainDisabled = "domain_disabled",
  Duo = "duo",
  Email = "email",
  Forum = "forum",
  ImportContacts = "import_contacts",
  ImportExport = "import_export",
  InvertColorsOff = "invert_colors_off",
  ListAlt = "list_alt",
  LiveHelp = "live_help",
  LocationOff = "location_off",
  LocationOn = "location_on",
  MailOutline = "mail_outline",
  Message = "message",
  MobileScreenShare = "mobile_screen_share",
  NoSim = "no_sim",
  PausePresentation = "pause_presentation",
  PersonAddDisabled = "person_add_disabled",
  Phone = "phone",
  PhonelinkErase = "phonelink_erase",
  PhonelinkLock = "phonelink_lock",
  PhonelinkRing = "phonelink_ring",
  PhonelinkSetup = "phonelink_setup",
  PortableWifiOff = "portable_wifi_off",
  PresentToAll = "present_to_all",
  PrintDisabled = "print_disabled",
  RingVolume = "ring_volume",
  RssFeed = "rss_feed",
  ScreenShare = "screen_share",
  SentimentSatisfiedAlt = "sentiment_satisfied_alt",
  SpeakerPhone = "speaker_phone",
  StayCurrentLandscape = "stay_current_landscape",
  StayCurrentPortrait = "stay_current_portrait",
  StayPrimaryLandscape = "stay_primary_landscape",
  StayPrimaryPortrait = "stay_primary_portrait",
  StopScreenShare = "stop_screen_share",
  SwapCalls = "swap_calls",
  Textsms = "textsms",
  Unsubscribe = "unsubscribe",
  Voicemail = "voicemail",
  VpnKey = "vpn_key",
  Add = "add",
  AddBox = "add_box",
  AddCircle = "add_circle",
  AddCircleOutline = "add_circle_outline",
  Archive = "archive",
  Backspace = "backspace",
  Ballot = "ballot",
  Block = "block",
  Clear = "clear",
  Create = "create",
  DeleteSweep = "delete_sweep",
  Drafts = "drafts",
  FileCopy = "file_copy",
  FilterList = "filter_list",
  Flag = "flag",
  FontDownload = "font_download",
  Forward = "forward",
  Gesture = "gesture",
  HowToReg = "how_to_reg",
  HowToVote = "how_to_vote",
  Inbox = "inbox",
  Link = "link",
  LinkOff = "link_off",
  LowPriority = "low_priority",
  Mail = "mail",
  Markunread = "markunread",
  MoveToInbox = "move_to_inbox",
  NextWeek = "next_week",
  OutlinedFlag = "outlined_flag",
  Redo = "redo",
  Remove = "remove",
  RemoveCircle = "remove_circle",
  RemoveCircleOutline = "remove_circle_outline",
  Reply = "reply",
  ReplyAll = "reply_all",
  Report = "report",
  ReportOff = "report_off",
  Save = "save",
  SaveAlt = "save_alt",
  SelectAll = "select_all",
  Send = "send",
  Sort = "sort",
  TextFormat = "text_format",
  Unarchive = "unarchive",
  Undo = "undo",
  Waves = "waves",
  Weekend = "weekend",
  WhereToVote = "where_to_vote",
  AccessAlarm = "access_alarm",
  AccessAlarms = "access_alarms",
  AccessTime = "access_time",
  AddAlarm = "add_alarm",
  AddToHomeScreen = "add_to_home_screen",
  AirplanemodeActive = "airplanemode_active",
  AirplanemodeInactive = "airplanemode_inactive",
  Battery20 = "battery_20",
  Battery30 = "battery_30",
  Battery50 = "battery_50",
  Battery60 = "battery_60",
  Battery80 = "battery_80",
  Battery90 = "battery_90",
  BatteryAlert = "battery_alert",
  BatteryCharging20 = "battery_charging_20",
  BatteryCharging30 = "battery_charging_30",
  BatteryCharging50 = "battery_charging_50",
  BatteryCharging60 = "battery_charging_60",
  BatteryCharging80 = "battery_charging_80",
  BatteryCharging90 = "battery_charging_90",
  BatteryChargingFull = "battery_charging_full",
  BatteryFull = "battery_full",
  BatteryStd = "battery_std",
  BatteryUnknown = "battery_unknown",
  Bluetooth = "bluetooth",
  BluetoothConnected = "bluetooth_connected",
  BluetoothDisabled = "bluetooth_disabled",
  BluetoothSearching = "bluetooth_searching",
  BrightnessAuto = "brightness_auto",
  BrightnessHigh = "brightness_high",
  BrightnessLow = "brightness_low",
  BrightnessMedium = "brightness_medium",
  DataUsage = "data_usage",
  DeveloperMode = "developer_mode",
  Devices = "devices",
  Dvr = "dvr",
  GpsFixed = "gps_fixed",
  GpsNotFixed = "gps_not_fixed",
  GpsOff = "gps_off",
  GraphicEq = "graphic_eq",
  LocationDisabled = "location_disabled",
  LocationSearching = "location_searching",
  MobileFriendly = "mobile_friendly",
  MobileOff = "mobile_off",
  NetworkCell = "network_cell",
  NetworkWifi = "network_wifi",
  Nfc = "nfc",
  ScreenLockLandscape = "screen_lock_landscape",
  ScreenLockPortrait = "screen_lock_portrait",
  ScreenLockRotation = "screen_lock_rotation",
  ScreenRotation = "screen_rotation",
  SdStorage = "sd_storage",
  SettingsSystemDaydream = "settings_system_daydream",
  SignalCellular0Bar = "signal_cellular_0_bar",
  SignalCellular1Bar = "signal_cellular_1_bar",
  SignalCellular2Bar = "signal_cellular_2_bar",
  SignalCellular3Bar = "signal_cellular_3_bar",
  SignalCellular4Bar = "signal_cellular_4_bar",
  SignalCellularAlt = "signal_cellular_alt",
  SignalCellularConnectedNoInternet0Bar = "signal_cellular_connected_no_internet_0_bar",
  SignalCellularConnectedNoInternet1Bar = "signal_cellular_connected_no_internet_1_bar",
  SignalCellularConnectedNoInternet2Bar = "signal_cellular_connected_no_internet_2_bar",
  SignalCellularConnectedNoInternet3Bar = "signal_cellular_connected_no_internet_3_bar",
  SignalCellularConnectedNoInternet4Bar = "signal_cellular_connected_no_internet_4_bar",
  SignalCellularNoSim = "signal_cellular_no_sim",
  SignalCellularNull = "signal_cellular_null",
  SignalCellularOff = "signal_cellular_off",
  SignalWifi0Bar = "signal_wifi_0_bar",
  SignalWifi1Bar = "signal_wifi_1_bar",
  SignalWifi1BarLock = "signal_wifi_1_bar_lock",
  SignalWifi2Bar = "signal_wifi_2_bar",
  SignalWifi2BarLock = "signal_wifi_2_bar_lock",
  SignalWifi3Bar = "signal_wifi_3_bar",
  SignalWifi3BarLock = "signal_wifi_3_bar_lock",
  SignalWifi4Bar = "signal_wifi_4_bar",
  SignalWifi4BarLock = "signal_wifi_4_bar_lock",
  SignalWifiOff = "signal_wifi_off",
  Storage = "storage",
  Usb = "usb",
  Wallpaper = "wallpaper",
  Widgets = "widgets",
  WifiLock = "wifi_lock",
  WifiTethering = "wifi_tethering",
  AddComment = "add_comment",
  AttachFile = "attach_file",
  AttachMoney = "attach_money",
  BarChart = "bar_chart",
  BorderAll = "border_all",
  BorderBottom = "border_bottom",
  BorderClear = "border_clear",
  BorderColor = "border_color",
  BorderHorizontal = "border_horizontal",
  BorderInner = "border_inner",
  BorderLeft = "border_left",
  BorderOuter = "border_outer",
  BorderRight = "border_right",
  BorderStyle = "border_style",
  BorderTop = "border_top",
  BorderVertical = "border_vertical",
  BubbleChart = "bubble_chart",
  DragHandle = "drag_handle",
  FormatAlignCenter = "format_align_center",
  FormatAlignJustify = "format_align_justify",
  FormatAlignLeft = "format_align_left",
  FormatAlignRight = "format_align_right",
  FormatBold = "format_bold",
  FormatClear = "format_clear",
  FormatColorFill = "format_color_fill",
  FormatColorReset = "format_color_reset",
  FormatColorText = "format_color_text",
  FormatIndentDecrease = "format_indent_decrease",
  FormatIndentIncrease = "format_indent_increase",
  FormatItalic = "format_italic",
  FormatLineSpacing = "format_line_spacing",
  FormatListBulleted = "format_list_bulleted",
  FormatListNumbered = "format_list_numbered",
  FormatListNumberedRtl = "format_list_numbered_rtl",
  FormatPaint = "format_paint",
  FormatQuote = "format_quote",
  FormatShapes = "format_shapes",
  FormatSize = "format_size",
  FormatStrikethrough = "format_strikethrough",
  FormatTextdirectionLToR = "format_textdirection_l_to_r",
  FormatTextdirectionRToL = "format_textdirection_r_to_l",
  FormatUnderlined = "format_underlined",
  Functions = "functions",
  Highlight = "highlight",
  InsertChart = "insert_chart",
  InsertChartOutlined = "insert_chart_outlined",
  InsertComment = "insert_comment",
  InsertDriveFile = "insert_drive_file",
  InsertEmoticon = "insert_emoticon",
  InsertInvitation = "insert_invitation",
  InsertLink = "insert_link",
  InsertPhoto = "insert_photo",
  LinearScale = "linear_scale",
  MergeType = "merge_type",
  ModeComment = "mode_comment",
  MonetizationOn = "monetization_on",
  MoneyOff = "money_off",
  MultilineChart = "multiline_chart",
  Notes = "notes",
  PieChart = "pie_chart",
  Publish = "publish",
  ScatterPlot = "scatter_plot",
  Score = "score",
  ShortText = "short_text",
  ShowChart = "show_chart",
  SpaceBar = "space_bar",
  StrikethroughS = "strikethrough_s",
  TableChart = "table_chart",
  TextFields = "text_fields",
  Title = "title",
  VerticalAlignBottom = "vertical_align_bottom",
  VerticalAlignCenter = "vertical_align_center",
  VerticalAlignTop = "vertical_align_top",
  WrapText = "wrap_text",
  Attachment = "attachment",
  Cloud = "cloud",
  CloudCircle = "cloud_circle",
  CloudDone = "cloud_done",
  CloudDownload = "cloud_download",
  CloudOff = "cloud_off",
  CloudQueue = "cloud_queue",
  CloudUpload = "cloud_upload",
  CreateNewFolder = "create_new_folder",
  Folder = "folder",
  FolderOpen = "folder_open",
  FolderShared = "folder_shared",
  Cast = "cast",
  CastConnected = "cast_connected",
  CastForEducation = "cast_for_education",
  Computer = "computer",
  DesktopMac = "desktop_mac",
  DesktopWindows = "desktop_windows",
  DeveloperBoard = "developer_board",
  DeviceHub = "device_hub",
  DeviceUnknown = "device_unknown",
  DevicesOther = "devices_other",
  Dock = "dock",
  Gamepad = "gamepad",
  Headset = "headset",
  HeadsetMic = "headset_mic",
  Keyboard = "keyboard",
  KeyboardArrowDown = "keyboard_arrow_down",
  KeyboardArrowLeft = "keyboard_arrow_left",
  KeyboardArrowRight = "keyboard_arrow_right",
  KeyboardArrowUp = "keyboard_arrow_up",
  KeyboardBackspace = "keyboard_backspace",
  KeyboardCapslock = "keyboard_capslock",
  KeyboardHide = "keyboard_hide",
  KeyboardReturn = "keyboard_return",
  KeyboardTab = "keyboard_tab",
  KeyboardVoice = "keyboard_voice",
  Laptop = "laptop",
  LaptopChromebook = "laptop_chromebook",
  LaptopMac = "laptop_mac",
  LaptopWindows = "laptop_windows",
  Memory = "memory",
  Mouse = "mouse",
  PhoneAndroid = "phone_android",
  PhoneIphone = "phone_iphone",
  Phonelink = "phonelink",
  PhonelinkOff = "phonelink_off",
  PowerInput = "power_input",
  Router = "router",
  Scanner = "scanner",
  Security = "security",
  SimCard = "sim_card",
  Smartphone = "smartphone",
  Speaker = "speaker",
  SpeakerGroup = "speaker_group",
  Tablet = "tablet",
  TabletAndroid = "tablet_android",
  TabletMac = "tablet_mac",
  Toys = "toys",
  Tv = "tv",
  VideogameAsset = "videogame_asset",
  Watch = "watch",
  AddAPhoto = "add_a_photo",
  AddPhotoAlternate = "add_photo_alternate",
  AddToPhotos = "add_to_photos",
  Adjust = "adjust",
  Assistant = "assistant",
  AssistantPhoto = "assistant_photo",
  Audiotrack = "audiotrack",
  BlurCircular = "blur_circular",
  BlurLinear = "blur_linear",
  BlurOff = "blur_off",
  BlurOn = "blur_on",
  Brightness1 = "brightness_1",
  Brightness2 = "brightness_2",
  Brightness3 = "brightness_3",
  Brightness4 = "brightness_4",
  Brightness5 = "brightness_5",
  Brightness6 = "brightness_6",
  Brightness7 = "brightness_7",
  BrokenImage = "broken_image",
  Brush = "brush",
  BurstMode = "burst_mode",
  Camera = "camera",
  CameraAlt = "camera_alt",
  CameraFront = "camera_front",
  CameraRear = "camera_rear",
  CameraRoll = "camera_roll",
  CenterFocusStrong = "center_focus_strong",
  CenterFocusWeak = "center_focus_weak",
  Collections = "collections",
  CollectionsBookmark = "collections_bookmark",
  ColorLens = "color_lens",
  Colorize = "colorize",
  Compare = "compare",
  ControlPoint = "control_point",
  ControlPointDuplicate = "control_point_duplicate",
  Crop = "crop",
  Crop169 = "crop_16_9",
  Crop32 = "crop_3_2",
  Crop54 = "crop_5_4",
  Crop75 = "crop_7_5",
  CropDin = "crop_din",
  CropFree = "crop_free",
  CropLandscape = "crop_landscape",
  CropOriginal = "crop_original",
  CropPortrait = "crop_portrait",
  CropRotate = "crop_rotate",
  CropSquare = "crop_square",
  Dehaze = "dehaze",
  Details = "details",
  Edit = "edit",
  Exposure = "exposure",
  ExposureNeg1 = "exposure_neg_1",
  ExposureNeg2 = "exposure_neg_2",
  ExposurePlus1 = "exposure_plus_1",
  ExposurePlus2 = "exposure_plus_2",
  ExposureZero = "exposure_zero",
  Filter = "filter",
  Filter1 = "filter_1",
  Filter2 = "filter_2",
  Filter3 = "filter_3",
  Filter4 = "filter_4",
  Filter5 = "filter_5",
  Filter6 = "filter_6",
  Filter7 = "filter_7",
  Filter8 = "filter_8",
  Filter9 = "filter_9",
  Filter9Plus = "filter_9_plus",
  FilterBAndW = "filter_b_and_w",
  FilterCenterFocus = "filter_center_focus",
  FilterDrama = "filter_drama",
  FilterFrames = "filter_frames",
  FilterHdr = "filter_hdr",
  FilterNone = "filter_none",
  FilterTiltShift = "filter_tilt_shift",
  FilterVintage = "filter_vintage",
  Flare = "flare",
  FlashAuto = "flash_auto",
  FlashOff = "flash_off",
  FlashOn = "flash_on",
  Flip = "flip",
  Gradient = "gradient",
  Grain = "grain",
  GridOff = "grid_off",
  GridOn = "grid_on",
  HdrOff = "hdr_off",
  HdrOn = "hdr_on",
  HdrStrong = "hdr_strong",
  HdrWeak = "hdr_weak",
  Healing = "healing",
  Image = "image",
  ImageAspectRatio = "image_aspect_ratio",
  ImageSearch = "image_search",
  Iso = "iso",
  Landscape = "landscape",
  LeakAdd = "leak_add",
  LeakRemove = "leak_remove",
  Lens = "lens",
  LinkedCamera = "linked_camera",
  Looks = "looks",
  Looks3 = "looks_3",
  Looks4 = "looks_4",
  Looks5 = "looks_5",
  Looks6 = "looks_6",
  LooksOne = "looks_one",
  LooksTwo = "looks_two",
  Loupe = "loupe",
  MonochromePhotos = "monochrome_photos",
  MovieCreation = "movie_creation",
  MovieFilter = "movie_filter",
  MusicNote = "music_note",
  MusicOff = "music_off",
  Nature = "nature",
  NaturePeople = "nature_people",
  NavigateBefore = "navigate_before",
  NavigateNext = "navigate_next",
  Palette = "palette",
  Panorama = "panorama",
  PanoramaFishEye = "panorama_fish_eye",
  PanoramaHorizontal = "panorama_horizontal",
  PanoramaVertical = "panorama_vertical",
  PanoramaWideAngle = "panorama_wide_angle",
  Photo = "photo",
  PhotoAlbum = "photo_album",
  PhotoCamera = "photo_camera",
  PhotoFilter = "photo_filter",
  PhotoLibrary = "photo_library",
  PhotoSizeSelectActual = "photo_size_select_actual",
  PhotoSizeSelectLarge = "photo_size_select_large",
  PhotoSizeSelectSmall = "photo_size_select_small",
  PictureAsPdf = "picture_as_pdf",
  Portrait = "portrait",
  RemoveRedEye = "remove_red_eye",
  Rotate90DegreesCcw = "rotate_90_degrees_ccw",
  RotateLeft = "rotate_left",
  RotateRight = "rotate_right",
  ShutterSpeed = "shutter_speed",
  Slideshow = "slideshow",
  Straighten = "straighten",
  Style = "style",
  SwitchCamera = "switch_camera",
  SwitchVideo = "switch_video",
  TagFaces = "tag_faces",
  Texture = "texture",
  Timelapse = "timelapse",
  Timer = "timer",
  Timer10 = "timer_10",
  Timer3 = "timer_3",
  TimerOff = "timer_off",
  Tonality = "tonality",
  Transform = "transform",
  Tune = "tune",
  ViewComfy = "view_comfy",
  ViewCompact = "view_compact",
  Vignette = "vignette",
  WbAuto = "wb_auto",
  WbCloudy = "wb_cloudy",
  WbIncandescent = "wb_incandescent",
  WbIridescent = "wb_iridescent",
  WbSunny = "wb_sunny",
  ThreeSixty = "360",
  AddLocation = "add_location",
  Atm = "atm",
  Beenhere = "beenhere",
  Category = "category",
  CompassCalibration = "compass_calibration",
  DepartureBoard = "departure_board",
  Directions = "directions",
  DirectionsBike = "directions_bike",
  DirectionsBoat = "directions_boat",
  DirectionsBus = "directions_bus",
  DirectionsCar = "directions_car",
  DirectionsRailway = "directions_railway",
  DirectionsRun = "directions_run",
  DirectionsSubway = "directions_subway",
  DirectionsTransit = "directions_transit",
  DirectionsWalk = "directions_walk",
  EditAttributes = "edit_attributes",
  EditLocation = "edit_location",
  EvStation = "ev_station",
  Fastfood = "fastfood",
  Flight = "flight",
  Hotel = "hotel",
  Layers = "layers",
  LayersClear = "layers_clear",
  LocalActivity = "local_activity",
  LocalAirport = "local_airport",
  LocalAtm = "local_atm",
  LocalBar = "local_bar",
  LocalCafe = "local_cafe",
  LocalCarWash = "local_car_wash",
  LocalConvenienceStore = "local_convenience_store",
  LocalDining = "local_dining",
  LocalDrink = "local_drink",
  LocalFlorist = "local_florist",
  LocalGasStation = "local_gas_station",
  LocalGroceryStore = "local_grocery_store",
  LocalHospital = "local_hospital",
  LocalHotel = "local_hotel",
  LocalLaundryService = "local_laundry_service",
  LocalLibrary = "local_library",
  LocalMall = "local_mall",
  LocalMovies = "local_movies",
  LocalOffer = "local_offer",
  LocalParking = "local_parking",
  LocalPharmacy = "local_pharmacy",
  LocalPhone = "local_phone",
  LocalPizza = "local_pizza",
  LocalPlay = "local_play",
  LocalPostOffice = "local_post_office",
  LocalPrintshop = "local_printshop",
  LocalSee = "local_see",
  LocalShipping = "local_shipping",
  LocalTaxi = "local_taxi",
  Map = "map",
  Money = "money",
  MyLocation = "my_location",
  Navigation = "navigation",
  NearMe = "near_me",
  NotListedLocation = "not_listed_location",
  PersonPin = "person_pin",
  PersonPinCircle = "person_pin_circle",
  PinDrop = "pin_drop",
  Place = "place",
  RateReview = "rate_review",
  Restaurant = "restaurant",
  RestaurantMenu = "restaurant_menu",
  Satellite = "satellite",
  StoreMallDirectory = "store_mall_directory",
  Streetview = "streetview",
  Subway = "subway",
  Terrain = "terrain",
  Traffic = "traffic",
  Train = "train",
  Tram = "tram",
  TransferWithinAStation = "transfer_within_a_station",
  TransitEnterexit = "transit_enterexit",
  TripOrigin = "trip_origin",
  ZoomOutMap = "zoom_out_map",
  Apps = "apps",
  ArrowBack = "arrow_back",
  ArrowBackIos = "arrow_back_ios",
  ArrowDownward = "arrow_downward",
  ArrowDropDown = "arrow_drop_down",
  ArrowDropDownCircle = "arrow_drop_down_circle",
  ArrowDropUp = "arrow_drop_up",
  ArrowForward = "arrow_forward",
  ArrowForwardIos = "arrow_forward_ios",
  ArrowLeft = "arrow_left",
  ArrowRight = "arrow_right",
  ArrowUpward = "arrow_upward",
  Cancel = "cancel",
  Check = "check",
  ChevronLeft = "chevron_left",
  ChevronRight = "chevron_right",
  Close = "close",
  ExpandLess = "expand_less",
  ExpandMore = "expand_more",
  FirstPage = "first_page",
  Fullscreen = "fullscreen",
  FullscreenExit = "fullscreen_exit",
  LastPage = "last_page",
  Menu = "menu",
  MoreHoriz = "more_horiz",
  MoreVert = "more_vert",
  Refresh = "refresh",
  SubdirectoryArrowLeft = "subdirectory_arrow_left",
  SubdirectoryArrowRight = "subdirectory_arrow_right",
  UnfoldLess = "unfold_less",
  UnfoldMore = "unfold_more",
  Adb = "adb",
  AirlineSeatFlat = "airline_seat_flat",
  AirlineSeatFlatAngled = "airline_seat_flat_angled",
  AirlineSeatIndividualSuite = "airline_seat_individual_suite",
  AirlineSeatLegroomExtra = "airline_seat_legroom_extra",
  AirlineSeatLegroomNormal = "airline_seat_legroom_normal",
  AirlineSeatLegroomReduced = "airline_seat_legroom_reduced",
  AirlineSeatReclineExtra = "airline_seat_recline_extra",
  AirlineSeatReclineNormal = "airline_seat_recline_normal",
  BluetoothAudio = "bluetooth_audio",
  ConfirmationNumber = "confirmation_number",
  DiscFull = "disc_full",
  DriveEta = "drive_eta",
  EnhancedEncryption = "enhanced_encryption",
  EventAvailable = "event_available",
  EventBusy = "event_busy",
  EventNote = "event_note",
  FolderSpecial = "folder_special",
  LiveTv = "live_tv",
  Mms = "mms",
  More = "more",
  NetworkCheck = "network_check",
  NetworkLocked = "network_locked",
  NoEncryption = "no_encryption",
  OndemandVideo = "ondemand_video",
  PersonalVideo = "personal_video",
  PhoneBluetoothSpeaker = "phone_bluetooth_speaker",
  PhoneCallback = "phone_callback",
  PhoneForwarded = "phone_forwarded",
  PhoneInTalk = "phone_in_talk",
  PhoneLocked = "phone_locked",
  PhoneMissed = "phone_missed",
  PhonePaused = "phone_paused",
  Power = "power",
  PowerOff = "power_off",
  PriorityHigh = "priority_high",
  SdCard = "sd_card",
  Sms = "sms",
  SmsFailed = "sms_failed",
  Sync = "sync",
  SyncDisabled = "sync_disabled",
  SyncProblem = "sync_problem",
  SystemUpdate = "system_update",
  TapAndPlay = "tap_and_play",
  TimeToLeave = "time_to_leave",
  TvOff = "tv_off",
  Vibration = "vibration",
  VoiceChat = "voice_chat",
  VpnLock = "vpn_lock",
  Wc = "wc",
  Wifi = "wifi",
  WifiOff = "wifi_off",
  AcUnit = "ac_unit",
  AirportShuttle = "airport_shuttle",
  AllInclusive = "all_inclusive",
  BeachAccess = "beach_access",
  BusinessCenter = "business_center",
  Casino = "casino",
  ChildCare = "child_care",
  ChildFriendly = "child_friendly",
  FitnessCenter = "fitness_center",
  FreeBreakfast = "free_breakfast",
  GolfCourse = "golf_course",
  HotTub = "hot_tub",
  Kitchen = "kitchen",
  MeetingRoom = "meeting_room",
  NoMeetingRoom = "no_meeting_room",
  Pool = "pool",
  RoomService = "room_service",
  RvHookup = "rv_hookup",
  SmokeFree = "smoke_free",
  SmokingRooms = "smoking_rooms",
  Spa = "spa",
  Cake = "cake",
  Domain = "domain",
  Group = "group",
  GroupAdd = "group_add",
  LocationCity = "location_city",
  Mood = "mood",
  MoodBad = "mood_bad",
  Notifications = "notifications",
  NotificationsActive = "notifications_active",
  NotificationsNone = "notifications_none",
  NotificationsOff = "notifications_off",
  NotificationsPaused = "notifications_paused",
  Pages = "pages",
  PartyMode = "party_mode",
  People = "people",
  PeopleOutline = "people_outline",
  Person = "person",
  PersonAdd = "person_add",
  PersonOutline = "person_outline",
  PlusOne = "plus_one",
  Poll = "poll",
  Public = "public",
  School = "school",
  SentimentDissatisfied = "sentiment_dissatisfied",
  SentimentSatisfied = "sentiment_satisfied",
  SentimentVeryDissatisfied = "sentiment_very_dissatisfied",
  SentimentVerySatisfied = "sentiment_very_satisfied",
  Share = "share",
  ThumbDownAlt = "thumb_down_alt",
  ThumbUpAlt = "thumb_up_alt",
  Whatshot = "whatshot",
  CheckBox = "check_box",
  CheckBoxOutlineBlank = "check_box_outline_blank",
  IndeterminateCheckBox = "indeterminate_check_box",
  RadioButtonChecked = "radio_button_checked",
  RadioButtonUnchecked = "radio_button_unchecked",
  Star = "star",
  StarBorder = "star_border",
  StarHalf = "star_half",
  ToggleOff = "toggle_off",
  ToggleOn = "toggle_on"
}

@CustomElement("material-icon")
export default class MaterialIcon extends EmpatiElement {
  @Property Icon: Icons;

  Render({ Icon }: Properties<this>) {
    return html`
      <style>
        :host{
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: var(--icon-size, 24px);
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      </style>
      ${Icon}
    `;
  }
}
