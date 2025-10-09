import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
}


export default function SixMonthCoursesScreen ({ navigation })  {
  const courses: Course[] = [
    {
      id: 'firstaid',
      title: 'First Aid Course',
      description: 'Essential life-saving skills for emergencies. Learn to handle critical situations effectively.',
      price: 'R1500'
    },
    {
      id: 'sewing',
      title: 'Sewing Course',
      description: 'Master professional tailoring skills and garment construction from basic stitching to crocheting.',
      price: 'R1500'
    },
    {
      id: 'land',
      title: 'Landscaping Course',
      description: 'Design and maintenance beautiful and functional outdoor and spaces with practical gardening.',
      price: 'R1500'
    },
    {
      id: 'life',
      title: 'Life Skills Course',
      description: 'Develop crucial professional and personal skills for growth, career advancement and for your daily life.',
      price: 'R1500'
    }
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleMenuPress = () => {
    console.log('Menu pressed');
    // Open menu drawer or navigate to menu
  };

  const handleViewCourse = (courseId: string, courseTitle: string) => {
    console.log(`View course: ${courseTitle}`);
    navigation.navigate(courseId);
  };

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <LinearGradient
      colors={['#55c8c2ff', '#C6E2FC']}
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

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Six Month Courses</Text>
          </View>

          {/* Courses List */}
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {courses.map((course) => (
              <View key={course.id} style={styles.courseCard}>
                <View style={styles.cardContent}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <Text style={styles.courseDescription}>{course.description}</Text>
                  <Text style={styles.coursePrice}>{course.price}</Text>
                  
                  <TouchableOpacity 
                    style={styles.viewButton}
                    onPress={() => handleViewCourse(course.id, course.title)}
                    activeOpacity={0.85}
                  >
                    <LinearGradient
                      colors={['#B8860B', '#DAA520']}
                      style={styles.buttonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={styles.viewButtonText}>View course</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Bottom Navigation */}
          <View style={styles.bottomNav}>
            <TouchableOpacity 
              style={styles.navItem}
              onPress={() => handleNavigation('home')}
              activeOpacity={0.7}
            >
              <Ionicons name="home-outline" size={24} color="#4B5563" />
              <Text style={styles.navLabel}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.navItem}
              onPress={() => handleNavigation('calc')}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons name="calculator" size={24} color="#4B5563" />
              <Text style={styles.navLabel}>Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.navItem}
              onPress={() => handleNavigation('')}
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
    paddingVertical: 10,
    marginTop: 30,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    backgroundColor: "#2C3E50",
    borderRadius: 2,
  },
  titleContainer: {
    paddingHorizontal: 32,
    paddingVertical: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 100,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    borderLeftWidth: 6,
    borderLeftColor: '#16697A',
  },
  cardContent: {
    padding: 24,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },
  courseDescription: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 16,
  },
  coursePrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B8860B',
    marginBottom: 20,
  },
  viewButton: {
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#B8860B',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
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
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '600',
  },
});
