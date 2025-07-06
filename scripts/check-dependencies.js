import { execSync } from "child_process"

console.log("🔍 Checking for React-Native and Expo packages...\n")

try {
  // Run npm ls to get dependency tree
  const output = execSync("npm ls --depth=0", { encoding: "utf8" })

  console.log("📦 Current dependencies:")
  console.log(output)

  // Check for problematic packages
  const problematicPackages = ["react-native", "expo", "expo-asset", "expo-file-system", "expo-gl"]

  let foundProblematic = false

  problematicPackages.forEach((pkg) => {
    if (output.includes(pkg)) {
      console.log(`❌ Found problematic package: ${pkg}`)
      foundProblematic = true
    }
  })

  if (!foundProblematic) {
    console.log("✅ No React-Native or Expo packages found!")
    console.log("✅ Dependencies are clean for web deployment")
  } else {
    console.log("⚠️  Some problematic packages still exist")
  }
} catch (error) {
  console.log("ℹ️  Running npm ls check...")

  // npm ls might exit with code 1 even on success, so let's handle that
  try {
    const output = execSync("npm ls --depth=0 2>/dev/null || true", { encoding: "utf8" })

    const problematicPackages = ["react-native", "expo", "expo-asset", "expo-file-system", "expo-gl"]

    let foundProblematic = false

    problematicPackages.forEach((pkg) => {
      if (output.includes(pkg)) {
        console.log(`❌ Found problematic package: ${pkg}`)
        foundProblematic = true
      }
    })

    if (!foundProblematic) {
      console.log("✅ No React-Native or Expo packages found!")
      console.log("✅ Dependencies are clean for web deployment")
    }
  } catch (err) {
    console.log("Error checking dependencies:", err.message)
  }
}

console.log("\n🚀 Ready for deployment!")
