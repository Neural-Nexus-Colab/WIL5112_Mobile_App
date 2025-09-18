/* styles.ts */
import { StyleSheet } from 'react-native';

export const g = StyleSheet.create({
  /* ---------- shared layout ---------- */
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    justifyContent: 'center',
  },

  /* ---------- headings ---------- */
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  h2: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  /* ---------- text ---------- */
  white14: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  white16: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  /* ---------- logo / emoji ---------- */
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
    marginBottom: 24,
    alignSelf: 'center',
  },
  emoji64: {
    fontSize: 64,
    marginBottom: 16,
    alignSelf: 'center',
  },

  /* ---------- inputs ---------- */
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 16,
  },
  inputFlex: {
    flex: 1,
    fontSize: 16,
  },

  /* ---------- buttons ---------- */
  btn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: 6,
  },
  btnTxt: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },

  /* ---------- links ---------- */
  link: {
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
});