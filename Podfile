# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'demo1' do
  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
  use_frameworks!

  pod 'DoubleConversion', :podspec => './node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => './node_modules/react-native/third-party-podspecs/GLog.podspec'
  pod 'Folly', :podspec => './node_modules/react-native/third-party-podspecs/Folly.podspec'


  pod 'React', :path => './node_modules/react-native', :subspecs =>  [
  'Core',
  'DevSupport',
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket',
  'CxxBridge'
  ]

  # 如果你的RN版本 >= 0.42.0，请加入下面这行
  pod "yoga", :path => "./node_modules/react-native/ReactCommon/yoga"

end
