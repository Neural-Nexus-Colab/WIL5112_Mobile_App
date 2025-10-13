import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface ContactLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  icon: string;
}


export default function ContactUsScreen ({ navigation })  {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  const locations: ContactLocation[] = [
    {
      id: '1',
      name: 'Johannesburg West',
      address: '123 Rivomia Road, Sandton',
      phone: '067 887 9321',
      email: 'empoweringthenation@west.co.za',
      icon: 'location-outline'
    },
    {
      id: '2',
      name: 'Johannesburg East',
      address: '456 Main Street, Rosevelt',
      phone: '072 045 7386',
      email: 'empoweringthenation@east.co.za',
      icon: 'location-outline'
    },
    {
      id: '3',
      name: 'Johannesburg North',
      address: '78 Springs Road, Bedfordview',
      phone: '082 587 3344',
      email: 'empoweringthenation@east.co.za',
      icon: 'location-outline'
    }
  ];

  const handleBackPress = () => {
    navigation.navigate("home");
  };

  const handleMenuPress = () => {
    console.log('Menu pressed');
  };

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <LinearGradient
      colors={["#55c8c2ff", "#C6E2FC"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color="#2C3E50" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Contact Us</Text>

            <TouchableOpacity 
              style={styles.menuButton}
              onPress={handleMenuPress}
              activeOpacity={0.7}
            >
              <View style={styles.menuIcon}>
                <View style={styles.menuLine} />
                <View style={styles.menuLine} />
                <View style={styles.menuLine} />
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Contact Locations */}
            {locations.map((location) => (
              <View key={location.id} style={styles.locationCard}>
                <Text style={styles.locationName}>{location.name}</Text>

                {/* Address */}
                <View style={styles.infoRow}>
                  <Ionicons name="location-outline" size={20} color="#E74C3C" />
                  <Text style={styles.infoText}>{location.address}</Text>
                </View>

                {/* Phone */}
                <TouchableOpacity 
                  style={styles.infoRow}
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons name="phone" size={20} color="#E74C3C" />
                  <Text style={styles.infoTextLink}>{location.phone}</Text>
                </TouchableOpacity>

                {/* Email */}
                <TouchableOpacity 
                  style={styles.infoRow}
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons name="email-outline" size={20} color="#6B7280" />
                  <Text style={styles.infoText}>{location.email}</Text>
                </TouchableOpacity>

                {/* Map Location Button */}
                <TouchableOpacity 
                  style={styles.mapButton}
                  activeOpacity={0.8}
                >
                  <Text style={styles.mapButtonText}>Map Location</Text>
                </TouchableOpacity>
              </View>
            ))}

            {/* App Settings */}
            <View style={styles.settingsCard}>
              <Text style={styles.settingsTitle}>App Settings</Text>

              <View style={styles.settingRow}>
                <Text style={styles.settingLabel}>Privacy Settings</Text>
                <TouchableOpacity 
                  style={[styles.toggle, privacyEnabled && styles.toggleEnabled]}
                  onPress={() => setPrivacyEnabled(!privacyEnabled)}
                  activeOpacity={0.7}
                >
                  <View 
                    style={[
                      styles.toggleThumb,
                      privacyEnabled && styles.toggleThumbEnabled
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

  {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
              <TouchableOpacity
                style={styles.navItem}
                onPress={() => handleNavigation("home")}
                activeOpacity={0.7}
              >
                <Ionicons name="home-outline" size={24} color="#4B5563" />
                <Text style={styles.navLabel}>Home</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.navItem}
                onPress={() => handleNavigation("calc")}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name="calculator"
                  size={24}
                  color="#4B5563"
                />
                <Text style={styles.navLabel}>Fees</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.navItem}
                onPress={() => handleNavigation("contact")}
                activeOpacity={0.7}
              >
                <Ionicons name="call-outline" size={24} color="#4B5563" />
                <Text style={styles.navLabel}>Contact</Text>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    gap: 5,
  },
  menuLine: {
    width: 25,
    height: 3,
    backgroundColor: '#2C3E50',
    borderRadius: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 10,
  },
  locationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#16697A',
  },
  locationName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  infoText: {
    fontSize: 15,
    color: '#4B5563',
    flex: 1,
    lineHeight: 20,
  },
  infoTextLink: {
    fontSize: 15,
    color: '#16697A',
    flex: 1,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },
  mapButton: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#E8EEF2',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  mapButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
    textAlign: 'center',
  },
  settingsCard: {
    backgroundColor: 'rgba(200, 228, 240, 0.7)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight: '500',
  },
  toggle: {
    width: 56,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D1D5DB',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleEnabled: {
    backgroundColor: '#16697A',
  },
  toggleThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleThumbEnabled: {
    alignSelf: 'flex-end',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '600',
    marginTop: 4,
  },
});

