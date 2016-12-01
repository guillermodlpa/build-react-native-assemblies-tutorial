import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals, profileStyles } from '../../styles';
import { ReactLogo } from '../../fixtures';
const styles = profileStyles;

class ProfileView extends Component{
  getUserLocationLabel() {
    let { currentUser } = this.props;

    let cityLongName = (
      currentUser.location && currentUser.location.city && currentUser.location.city.long_name ||
      '');
    let stateShortName = (
      currentUser.location && currentUser.location.state && currentUser.location.state.short_name ||
      '');
    return [
      cityLongName,
      stateShortName,
    ].filter((name) => name !== '').join(', ');
  }
  render() {
    let titleConfig = { title: 'Profile', tintColor: 'white' };
    let { currentUser } = this.props;

    let avatar = currentUser.avatar || ReactLogo;
    let locationName = this.getUserLocationLabel();

    return (
      <View style={[globals.flexContainer, globals.inactive]}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <ScrollView style={globals.flex}>
          <View style={styles.flexRow}>
            <TouchableOpacity style={[globals.flexCenter, globals.pv1]}>
              <Image
                source={{uri: avatar}}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={globals.h4}>
                {currentUser.firstName} {currentUser.lastName}
              </Text>
              <Text style={globals.h5}>
                {locationName}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.formButton}>
            <Text style={globals.h4}>
              My Technologies
            </Text>
            <Icon name='ios-arrow-forward' size={30} color='#ccc' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.formButton}>
            <Text style={globals.h4}>
              Settings
            </Text>
            <Icon name='ios-arrow-forward' size={30} color='#ccc' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

export default ProfileView;